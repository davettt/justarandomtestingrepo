/* script for Sheetsee shortcode */

jQuery(document).ready(function($) {
    if ($("span.sheetseepie")[0]){
        var variables = {
            'sheetseeurl' : $(this).text(),
            'sheetseeid' : $(this).parent("div").attr("id"),
            'sheetseelabel' : $(this).data("label"),
            'sheetseeunit' : $(this).data("unit"),
            'sheetseemargin' : $(this).data("margin"),
            'sheetseewidth' : $(this).data("width"),
            'sheetseeheight' : $(this).data("height"),
            'sheetseehoriz' : $(this).data("horiz"),
            'sheetseehi' : $(this).data("hi")
        };
        console.log(variables['sheetseeurl']);
    }
    /*
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
}*/} );