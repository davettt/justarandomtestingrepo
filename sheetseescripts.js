/* script for Sheetsee shortcode */

jQuery(document).ready(function($) {
        $("span.sheetseepie").each(function(index) {
            sheetseeurl = $(this).text();
            var sheetseeid = $(this).parent("div").attr("id");
            var sheetseelabel = $(this).data("label");
            var sheetseeunit = $(this).data("unit");
            var sheetseemargin = $(this).data("margin");
            var sheetseewidth = $(this).data("width");
            var sheetseeheight = $(this).data("height");
            var sheetseehoriz = $(this).data("horiz");
            var sheetseehi = $(this).data("hi");
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
                callback: showInfo(),
                simpleSheet: true 
            });
    });
function showInfo(data) {
    var url= sheetseeurl;
    var pieOptions = {
    labels: $(this).data("label"), 
    units: $(this).data("unit"), 
    m: $(this).data("margin"), 
    w: $(this).data("width"), 
    h: $(this).data("height"), 
    div: $(this).parent("div").attr("id"), 
    xaxis: $(this).data("horiz"),
    hiColor: $(this).data("hi")
    };
            console.log(url);
    Sheetsee.d3PieChart(data,pieOptions);
}} );