/* script for Sheetsee shortcode */

jQuery(document).ready(function($) {
        $("span.sheetseepie").each(function(index) {
            sheetseeurl = $(this).text();
            sheetseeid = $(this).parent("div").attr("id");
            sheetseelabel = $(this).data("label");
            sheetseeunit = $(this).data("unit");
            sheetseemargin = $(this).data("margin");
            sheetseewidth = $(this).data("width");
            sheetseeheight = $(this).data("height");
            sheetseehoriz = $(this).data("horiz");
            sheetseehi = $(this).data("hi");
            console.log(sheetseeurl);
            console.log(sheetseeid);
            console.log(sheetseelabel);
            console.log(sheetseeunit);
            console.log(sheetseemargin);
            console.log(sheetseewidth);
            console.log(sheetseeheight);
            console.log(sheetseehoriz);
            console.log(sheetseehi);
            $("span.sheetseepie").empty();
            Tabletop.init({ 
                key: sheetseeurl,
                callback: showInfo,
                simpleSheet: true 
            });
    });
function showInfo(data) {
    var pieOptions = {
    labels: sheetseelabel, 
    units: sheetseeunit, 
    m: sheetseemargin, 
    w: sheetseewidth, 
    h: sheetseeheight, 
    div: sheetseeid, 
    xaxis: sheetseehoriz,
    hiColor: sheetseehi
    };
    Sheetsee.d3PieChart(data,pieOptions);
}} );