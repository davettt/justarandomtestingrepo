/* script for Sheetsee shortcode */

jQuery(document).ready(function($) {
    $("span.sheetseepie").each(function() {
        var sheetseeurl = $(this).text();
        var sheetseeid = $(this).parent("div").attr("id");
        var sheetseelabel = $(this).data("label");
        var sheetseeunit = $(this).data("unit");
        var sheetseemargin = $(this).data("margin");
        var sheetseewidth = $(this).data("width");
        var sheetseeheight = $(this).data("height");
        var sheetseehoriz = $(this).data("horiz");
        var sheetseehi = $(this).data("hi");
            Tabletop.init({ 
                key: sheetseeurl,
                callback: showInfoPie,
                simpleSheet: true 
            });
        function showInfoPie(data) {
            var pieOptions = {
                labels: sheetseelabel, 
                units: sheetseeunit, 
                m: sheetseemargin, 
                w: sheetseewidth, 
                h: sheetseeheight, 
                div: '#'+sheetseeid, 
                xaxis: sheetseehoriz,
                hiColor: sheetseehi
            };
            Sheetsee.d3PieChart(data,pieOptions);
            $("span.sheetseepie").empty();
        }
    });
    $("span.sheetseebar").each(function() {
        var sheetseeurl = $(this).text();
        var sheetseeid = $(this).parent("div").attr("id");
        var sheetseelabel = $(this).data("label");
        var sheetseeunit = $(this).data("unit");
        var sheetseemargin = $(this).data("margin");
        var sheetseewidth = $(this).data("width");
        var sheetseeheight = $(this).data("height");
        var sheetseehoriz = $(this).data("horiz");
        var sheetseehi = $(this).data("hi");
            Tabletop.init({ 
                key: sheetseeurl,
                callback: showInfoBar,
                simpleSheet: true 
            });
        function showInfoBar(data) {
            var barOptions = {
                labels: sheetseelabel, 
                units: sheetseeunit, 
                m: sheetseemargin, 
                w: sheetseewidth, 
                h: sheetseeheight, 
                div: '#'+sheetseeid, 
                xaxis: sheetseehoriz,
                hiColor: sheetseehi
            };
            Sheetsee.d3BarChart(data,barOptions);
            $("span.sheetseebar").empty();
        }
    });
    $("span.sheetseeline").each(function() {
        var sheetseeurl = $(this).text();
        var sheetseeid = $(this).parent("div").attr("id");
        var sheetseelabel = $(this).data("label");
        var sheetseeunit = $(this).data("unit");
        var sheetseemargin = $(this).data("margin");
        var sheetseewidth = $(this).data("width");
        var sheetseeheight = $(this).data("height");
        var sheetseehoriz = $(this).data("horiz");
        var sheetseehi = $(this).data("hi");
            Tabletop.init({ 
                key: sheetseeurl,
                callback: showInfoLine,
                simpleSheet: true 
            });
        function showInfoLine(data) {
            var lineOptions = {
                labels: sheetseelabel, 
                units: sheetseeunit, 
                m: sheetseemargin, 
                w: sheetseewidth, 
                h: sheetseeheight, 
                div: '#'+sheetseeid, 
                xaxis: sheetseehoriz,
                hiColor: sheetseehi
            };
        Sheetsee.d3LineChart(data,lineOptions);
        $("span.sheetseeline").empty();
        }
    });
});