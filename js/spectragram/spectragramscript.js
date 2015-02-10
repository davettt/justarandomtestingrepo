/*script for spectragram*/
jQuery(document).ready(function($) {
    jQuery.fn.spectragram.accessData = {
    accessToken: 'add-access-token',
    clientID: 'add-client-id'
};
    var instaquery = instag.query;
    var instamax = instag.max;
    var instasize = instag.size;
    $('.instagrid').spectragram('getUserFeed',{
        query: instaquery,
        max: instamax,
        size: instasize,
        wrapEachWith: '<li></li>'
    }
    );
});