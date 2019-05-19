function lazyload(images) {
    $(images).css({'opacity': 0});
    $.each(images, function() {
        $(this).attr('src', $(this).data('src')).css({opacity: 1});
    });
};
