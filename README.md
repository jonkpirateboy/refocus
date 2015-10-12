# Refocus
A lightweight jQuery plugin to focus and unfocus like a camera. Perfect for full width parallax sites.

## Javascript
Include the javascript and call it on any event, like <a href="https://api.jquery.com/load-event/">window load</a> or <a href="https://github.com/luis-almeida/unveil">Unveil</a>. Add the class focus-in to the elements you want to go from blurry to sharp, and focus-out that you want to go from sharp to blurry.

## Stylesheet
Include refocus.css and make changes in your own css or inline css like this:

/*only necessary if you want more or less blur*/
.refocus-1 .focus-out,
.refocus-1 .refocus-img-bg {
	filter: blur(15px);
	-webkit-filter: blur(15px);
}
/*only necessary if you want faster or slower blur*/
.refocus-1 .focus-in,
.refocus-1 .focus-out {
	transition: all 2s ease 0.3s;
}

## Html
See a working example in index.html
