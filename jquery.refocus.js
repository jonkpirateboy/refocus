/**
 * jQuery Refocus
 * A lightweight jQuery plugin to focus and unfocus like a camera
 *
 * https://github.com/jonkpirateboy
 */

jQuery.fn.extend({
    refocus: function () {
	container = '#' + $(this).attr('id');
	imgSrc = $(container + ' .refocus-img img').attr('src');
	containerHeight = $(container + ' .refocus-img img').height()*0.8;
	$(container + ' .refocus-img, ' + container + ' .refocus-img-bg').css('background-image','url('+imgSrc+')');
	$(container + ', ' + container + ' .refocus-img, ' + container + ' .refocus-img-bg').css('height', containerHeight);
	$(container + ' .focus-out, ' + container + ' .focus-in').addClass('refocus');
	$(container + ' .focus-out.refocus').removeClass('focus-out refocus').addClass('focus-in');
	$(container + ' .focus-in.refocus').removeClass('focus-in refocus').addClass('focus-out');
    }
});
