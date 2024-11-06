package com.example.be_quan_tri.controllers.webcontrollers.dashboard;

import com.example.be_quan_tri.dtos.dashboard.CustomCount;
import com.example.be_quan_tri.services.PartnerService;
import com.example.be_quan_tri.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;

@Controller
public class DashboardWebUserController {
    @Autowired
    private PartnerService partnerService;

    @Autowired
    private TransactionService transactionService;


    @GetMapping("admin/dashboardUser")
    public String dashboardUser(Model model, @RequestParam("userId") String userId,
                                @RequestParam("startDate") String startDate,
                                @RequestParam("endDate") String endDate
                                ) {

        Long idPartner = Long.valueOf(userId);
        LocalDateTime localDateTimeStart = LocalDateTime.parse(startDate);
        LocalDateTime localDateTimeEnd = LocalDateTime.parse(endDate);
        Long countTransaction = transactionService.countToltalTransactionSuccess(idPartner, localDateTimeStart, localDateTimeEnd);
        Long totalMoney = transactionService.totalMoney(idPartner, localDateTimeStart, localDateTimeEnd);
        model.addAttribute("countTransaction", countTransaction);
        model.addAttribute("totalMoney", totalMoney);
        return "dashboard/thongke/roleUser/thongkeUser";
    }

}
