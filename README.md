# refocus

## Javascript
Include the javascript and call it on any event, like <a href="https://api.jquery.com/load-event/">window load</a> or <a href="https://github.com/luis-almeida/unveil">Unveil</a>.

## Stylesheet
Include refocus.css and maka changes in your own css or inline css like this:

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
See example in index.html
