/**
 * jQuery Refocus
 * A lightweight jQuery plugin to focus and unfocus like a camera
 * http://jonkpirateboy.github.io/refocus/

 * Licensed under the MIT license.
 * Copyright 2015 Johan Stenström
 */

jQuery.fn.extend({
    refocus: function () {
	imgSrc = $(this).find('.refocus-img img').attr('src');
	containerHeight = $(this).find('.refocus-img img').height()*0.8;
	contentHeight = $(this).find('.refocus-text-container .refocus-text').height();
	$(this).css('height', containerHeight);
	$(this).css('min-height', contentHeight);
	$(this).find('.refocus-img, .refocus-img-bg').css('background-image','url('+imgSrc+')');
	$(this).find('.focus-out, .focus-in').addClass('refocus-this');
	$(this).find('.focus-out.refocus-this').removeClass('focus-out refocus-this').addClass('focus-in');
	$(this).find('.focus-in.refocus-this').removeClass('focus-in refocus-this').addClass('focus-out');
	var timer;
	thisContainer = $(this);
	$(window).resize(function () {
	    timer = setTimeout(function () { 
	        containerHeight = thisContainer.find('.refocus-img img').height()*0.8;
			contentHeight = thisContainer.find('.refocus-text-container .refocus-text').height();
			thisContainer.css('height', containerHeight);
			thisContainer.css('min-height', contentHeight);
	    }, 500);
	});
    }
});
