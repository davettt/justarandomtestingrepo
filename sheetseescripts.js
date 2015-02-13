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
            console.log(sheetseeurl + index);
            console.log(sheetseeid);
            console.log(sheetseelabel);
            console.log(sheetseeunit);
            console.log(sheetseemargin);
            console.log(sheetseewidth);
            console.log(sheetseeheight);
            console.log(sheetseehoriz);
            console.log(sheetseehi);
            //$("span.sheetseepie").empty();
            Tabletop.init({ 
                key: sheetseeurl,
                callback: showInfo,
                simpleSheet: true 
            });
function showInfo(data) {
    /*var sheetseeurl = $("span.sheetseepie").text();
    var sheetseeid = $("span.sheetseepie").parent("div").attr("id");
    var sheetseelabel = $("span.sheetseepie").data("label");
    var sheetseeunit = $("span.sheetseepie").data("unit");
    var sheetseemargin = $("span.sheetseepie").data("margin");
    var sheetseewidth = $("span.sheetseepie").data("width");
    var sheetseeheight = $("span.sheetseepie").data("height");
    var sheetseehoriz = $("span.sheetseepie").data("horiz");
    var sheetseehi = $("span.sheetseepie").data("hi");
                console.log(sheetseeurl);*/
            console.log(sheetseeid);/*
            console.log(sheetseelabel);
            console.log(sheetseeunit);
            console.log(sheetseemargin);
            console.log(sheetseewidth);
            console.log(sheetseeheight);
            console.log(sheetseehoriz);
            console.log(sheetseehi);*/
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
}    });
$("span.sheetseebar").each(function(index) {
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
            console.log(sheetseeid + index);
            console.log(sheetseelabel);
            console.log(sheetseeunit);
            console.log(sheetseemargin);
            console.log(sheetseewidth);
            console.log(sheetseeheight);
            console.log(sheetseehoriz);
            console.log(sheetseehi);
            //$("span.sheetseepie").empty();
            Tabletop.init({ 
                key: sheetseeurl,
                callback: showInfoBar,
                simpleSheet: true 
            });
function showInfoBar(data) {
    /*var sheetseeurl = $("span.sheetseepie").text();
    var sheetseeid = $("span.sheetseepie").parent("div").attr("id");
    var sheetseelabel = $("span.sheetseepie").data("label");
    var sheetseeunit = $("span.sheetseepie").data("unit");
    var sheetseemargin = $("span.sheetseepie").data("margin");
    var sheetseewidth = $("span.sheetseepie").data("width");
    var sheetseeheight = $("span.sheetseepie").data("height");
    var sheetseehoriz = $("span.sheetseepie").data("horiz");
    var sheetseehi = $("span.sheetseepie").data("hi");
                console.log(sheetseeurl);*/
            console.log(sheetseeid);/*
            console.log(sheetseelabel);
            console.log(sheetseeunit);
            console.log(sheetseemargin);
            console.log(sheetseewidth);
            console.log(sheetseeheight);
            console.log(sheetseehoriz);
            console.log(sheetseehi);*/
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
}    });
$("span.sheetseeline").each(function(index) {
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
            //$("span.sheetseepie").empty();
            Tabletop.init({ 
                key: sheetseeurl,
                callback: showInfoLine,
                simpleSheet: true 
            });
function showInfoLine(data) {
    /*var sheetseeurl = $("span.sheetseepie").text();
    var sheetseeid = $("span.sheetseepie").parent("div").attr("id");
    var sheetseelabel = $("span.sheetseepie").data("label");
    var sheetseeunit = $("span.sheetseepie").data("unit");
    var sheetseemargin = $("span.sheetseepie").data("margin");
    var sheetseewidth = $("span.sheetseepie").data("width");
    var sheetseeheight = $("span.sheetseepie").data("height");
    var sheetseehoriz = $("span.sheetseepie").data("horiz");
    var sheetseehi = $("span.sheetseepie").data("hi");
                console.log(sheetseeurl);*/
            console.log(sheetseeid);/*
            console.log(sheetseelabel);
            console.log(sheetseeunit);
            console.log(sheetseemargin);
            console.log(sheetseewidth);
            console.log(sheetseeheight);
            console.log(sheetseehoriz);
            console.log(sheetseehi);*/
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
}    });
} );