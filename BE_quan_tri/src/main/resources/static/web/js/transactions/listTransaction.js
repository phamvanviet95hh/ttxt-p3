$(document).ready(function(){
    if(role === "ADMIN"){
    
    }else if(role === "PARTNER"){
        $(".admin_role").addClass("an")
        $("#box-partnerName").addClass("an");
    }
    const firstDay = getFirstDayOfMonth();
    const lastDay = getLastDayOfMonth();
    $("#startdate").attr("value", firstDay);
    $("#enddate").attr("value", lastDay);
    $(".nextPageTransaction").click(function(){
        let size = $(this).attr("data-size");
        let page = $(this).attr("data-page");
        let startDate = $("#startdate").val();
        let endDate = $("#enddate").val();
        let partnerCode = $("#partnerName").val();
        let statusPartner = $("#statusPartner").val();
        customGetPage(`${localdomain}/transactions/loadTransaction?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}&status=${statusPartner}&partnerCode=${partnerCode}`, "#loadTransaction")
    })

    $(".prevPageTransaction").click(function(){
        let size = $(this).attr("data-size");
        let page = $(this).attr("data-page");
        let startDate = $("#startdate").val();
        let endDate = $("#enddate").val();
        let partnerCode = $("#partnerName").val();
        let statusPartner = $("#statusPartner").val();
        customGetPage(`${localdomain}/transactions/loadTransaction?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}&status=${statusPartner}&partnerCode=${partnerCode}`, "#loadTransaction")
    })
    $(".btn-timkiemTransaction").click(function(){
        let startDate = $("#startdate").val();
        let endDate = $("#enddate").val();
        let partnerCode = $("#partnerName").val();
        let statusPartner = $("#statusPartner").val();
        if(role === "ADMIN"){
            customGetPage(`${localdomain}/transactions/loadTransaction?startDate=${startDate}&endDate=${endDate}&page=0&size=10&status=${statusPartner}&partnerCode=${partnerCode}&id=`, "#loadTransaction")
        }else if(role === "PARTNER"){
            customGetPage(`${localdomain}/transactions/loadTransaction?startDate=${startDate}&endDate=${endDate}&page=0&size=10&status=${statusPartner}&partnerCode=${partnerCode}&id=${userId}`, "#loadTransaction")
        }
        
    });

    $(".btn-exportData").click(function (){
        let startDate = $("#startdate").val();
        let endDate = $("#enddate").val();
        let partnerCode = $("#partnerName").val();
        let statusPartner = $("#statusPartner").val();
        if(role === "ADMIN"){
            window.location.href = `${localdomain}/reports/exportDataTransaction?startDate=${startDate}&endDate=${endDate}&page=0&size=10&status=${statusPartner}&partnerCode=${partnerCode}&id=`;
        }else if(role === "PARTNER"){
            window.location.href = `${localdomain}/reports/exportDataTransaction?startDate=${startDate}&endDate=${endDate}&page=0&size=10&status=${statusPartner}&partnerCode=${partnerCode}&id=${userId}`;
        }
        
    });
    
    $(".view-transaction").click(function (){
        let transactionId = $(this).attr("data-id");
        $("#info-transaction-box").addClass("hien");
        customGetPage(`${localdomain}/transactions/load-info-transaction?transactionId=${transactionId}`, "#info-transaction-box");
    });
    
    $("#partnerName").keyup(function (){
       let valuePartnerName = $(this).val();
       customGetPage(`${localdomain}/partners/valuePartnerName?valuePartnerName=${valuePartnerName}`, "#box-searchPartner");
    });
});