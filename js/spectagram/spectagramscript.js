/*script for spectagram*/
jQuery(document).ready(function($) {
    jQuery.fn.spectagram.accessData = {
    accessToken: '',
    clientID: ''
};
    var instaquery = instag.query;
    var instamax = instag.max;
    var instasize = instag.size;
    $('.instagfeed').spectagram('getUserFeed',{
        query: instaquery,
        max: instamax,
        size: instasize,
        wrapEachWith: '<li></li>'
    }
    );
});