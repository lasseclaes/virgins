$(window).on('load', function () {
        $('.parallax-window').parallax({});
   });
$(function () {
        $.instagramFeed({
            'username': 'instagram',
            'container': "#my-instagram-feed",
            'display_profile': true,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 6,
            'items_per_row': 3,
            'margin': 2
        });
}(jQuery));
