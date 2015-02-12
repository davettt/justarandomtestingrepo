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
        });
        $('div#sheetseecharts > span').empty();
   /* var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1gu2f0fKjrHa2GSM_hdl4FHaJW1bKEoZljI25NDfH_QU/pubhtml';
    Tabletop.init({ 
        key: public_spreadsheet_url,
        callback: showInfo,
        simpleSheet: true 
    });
function showInfo(data) {
    var pieOptions = {
    labels: "Content Management", 
    units: "Usage", 
    m: [80, 80, 80, 80], 
    w: 600, h: 400, 
    div: "#hello", 
    hiColor: "#14ECC8"
    };
    Sheetsee.d3PieChart(data,pieOptions);
}*/} );