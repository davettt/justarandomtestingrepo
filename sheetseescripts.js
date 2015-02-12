/* script for Sheetsee shortcode */

jQuery(document).ready(function($) {
        $("span.sheetseepie").each(function(index) {
            var sheetseeurl = $(this).text();
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
           // $("span.sheetseepie").empty();
            Tabletop.init({ 
                key: "https://docs.google.com/spreadsheets/d/1gu2f0fKjrHa2GSM_hdl4FHaJW1bKEoZljI25NDfH_QU/pubhtml",
                callback: showInfo,
                simpleSheet: true 
            });
    });
function showInfo(data) {
    var sheetseeurl = $("span.sheetseepie").text();
    var sheetseeid = $("span.sheetseepie").parent("div").attr("id");
    var sheetseelabel = $("span.sheetseepie").data("label");
    var sheetseeunit = $("span.sheetseepie").data("unit");
    var sheetseemargin = $("span.sheetseepie").data("margin");
    var sheetseewidth = $("span.sheetseepie").data("width");
    var sheetseeheight = $("span.sheetseepie").data("height");
    var sheetseehoriz = $("span.sheetseepie").data("horiz");
    var sheetseehi = $("span.sheetseepie").data("hi");
                console.log(sheetseeurl);
            console.log(sheetseeid);
            console.log(sheetseelabel);
            console.log(sheetseeunit);
            console.log(sheetseemargin);
            console.log(sheetseewidth);
            console.log(sheetseeheight);
            console.log(sheetseehoriz);
            console.log(sheetseehi);
    var pieOptions = {
    labels: "Content Management", 
    units: "Usage", 
    m: [80,80,80,80], 
    w: 500, 
    h: 400, 
    div: "sheetseecharts", 
    };
    Sheetsee.d3PieChart(data,pieOptions);
}} );