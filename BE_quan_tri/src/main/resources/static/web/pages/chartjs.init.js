! function(i) {
    "use strict";
    var e = function() {};
    e.prototype.respChart = function(e, r, a, o) {
        var t = e.get(0).getContext("2d"),
            n = i(e).parent();

        function s() {
            e.attr("width", i(n).width());
            switch (r) {
                case "Line":
                    new Chart(t, { type: "line", data: a, options: o });
                    break;
                case "Doughnut":
                    new Chart(t, { type: "doughnut", data: a, options: o });
                    break;
                case "Pie":
                    new Chart(t, { type: "pie", data: a, options: o });
                    break;
                case "Bar":
                    new Chart(t, { type: "bar", data: a, options: o });
                    break;
                case "Radar":
                    new Chart(t, { type: "radar", data: a, options: o });
                    break;
                case "PolarArea":
                    new Chart(t, { data: a, type: "polarArea", options: o })
            }
        }
        i(window).resize(s), s()
    }, e.prototype.init = function() {
        this.respChart(i("#lineChart"), "Line", { labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"], datasets: [{ label: "Conversion Rate", fill: !1, backgroundColor: "#25b343", borderColor: "#25b343", data: [44, 60, -33, 58, -4, 57, -89, 60, -33, 58] }, { label: "Average Sale Value", fill: !1, backgroundColor: "#e3eaef", borderColor: "#e3eaef", borderDash: [5, 5], data: [-68, 41, 86, -49, 2, 65, -64, 86, -49, 2] }] }, { responsive: !0, tooltips: { mode: "index", intersect: !1 }, hover: { mode: "nearest", intersect: !0 }, scales: { xAxes: [{ display: !0, gridLines: { color: "rgba(0,0,0,0.1)" } }], yAxes: [{ gridLines: { color: "rgba(255,255,255,0.05)", fontColor: "#fff" }, ticks: { max: 100, min: -100, stepSize: 20 } }] } });
        this.respChart(i("#doughnut"), "", { labels: ["Bitcoin", "Ethereum", "Cardano"], datasets: [{ data: [20, 10, 50], backgroundColor: ["#02a8b5", "#fd7e14", "#e3eaef"], hoverBackgroundColor: ["#02a8b5", "#fd7e14", "#e3eaef"], borderWidth: 3, hoverBorderColor: "#fff" }] }, { cutoutPercentage: 80 });
        this.respChart(i("#pie"), "Pie", { labels: ["Desktops", "Tablets", "Mobiles"], datasets: [{ data: [100, 121, 77], backgroundColor: ["#d33319", "#675aa9", "#e3eaef"], hoverBackgroundColor: ["#d33319", "#675aa9", "#e3eaef"], hoverBorderColor: "#fff" }] });
        this.respChart(i("#bar"), "Bar", { labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"], datasets: [{ label: "Sales Analytics", backgroundColor: "#4b88e4", borderColor: "#4b88e4", borderWidth: 1, hoverBackgroundColor: "#675aa9", hoverBorderColor: "#675aa9", data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81, 56, 89, 40] }] }, { legend: { display: !1 }, scales: { yAxes: [{ gridLines: { display: !1 }, ticks: { max: 100, min: 20, stepSize: 20 } }], xAxes: [{ barPercentage: .3, gridLines: { color: "rgba(0,0,0,0.05)" } }] } });
        this.respChart(i("#radar"), "Radar", { labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"], datasets: [{ label: "Desktops", backgroundColor: "rgba(179,181,198,0.2)", borderColor: "rgba(179,181,198,1)", pointBackgroundColor: "rgba(179,181,198,1)", pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "rgba(179,181,198,1)", data: [65, 59, 90, 81, 56, 55, 40] }, { label: "Tablets", backgroundColor: "rgba(255,99,132,0.2)", borderColor: "rgba(255,99,132,1)", pointBackgroundColor: "rgba(255,99,132,1)", pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "rgba(255,99,132,1)", data: [28, 48, 40, 19, 96, 27, 100] }] });
        this.respChart(i("#polarArea"), "PolarArea", { datasets: [{ data: [11, 16, 7, 18], backgroundColor: ["#297ef6", "#45bbe0", "#ebeff2", "#1ea69a"], label: "My dataset", hoverBorderColor: "#fff" }], labels: ["Series 1", "Series 2", "Series 3", "Series 4"] })
    }, i.ChartJs = new e, i.ChartJs.Constructor = e
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.ChartJs.init()
}();