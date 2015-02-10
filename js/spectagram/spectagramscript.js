/*script for spectagram*/
jQuery(document).ready(function($) {
    jQuery.fn.spectagram.accessData = {
    accessToken: '',
    clientID: ''
};
    $('.instagfeed').spectagram('getUserFeed',{
        query: 'username',
        max: 9,
        size:'small',
        wrapEachWith: '<li></li>'
    }
    );
});