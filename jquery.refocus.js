/**
 * jQuery Refocus
 * A lightweight jQuery plugin to focus and unfocus like a camera
 * http://jonkpirateboy.github.io/refocus/

 * Licensed under the MIT license.
 * Copyright 2015 Johan Stenström
 */

jQuery.fn.extend({
    refocus: function () {
		container = $(this);
		imgSrc = $(this).find('.refocus-img img').attr('src');
		containerHeight = $(this).find('.refocus-img img').height()*0.8;
		contentHeight = $(this).find('.refocus-text-container .t').height();
		$(this).find('.refocus-img, .refocus-img-bg').css('background-image','url('+imgSrc+')');
		$(this).css('height', containerHeight);
		$(this).css('min-height', contentHeight);
		$(this).find('.focus-out, .focus-in').addClass('refocus');
		$(this).find('.focus-out.refocus').removeClass('focus-out refocus').addClass('focus-in');
		$(this).find('.focus-in.refocus').removeClass('focus-in refocus').addClass('focus-out');
    }
});
