// completed 10-4-2016

// Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

// HINT: You may use decodeURIComponent()

// Examples :
// Input											Output
// url: "http://example.com?a=hello&b=99"		| [ [ "a", "hello" ], [ "b", "99" ] ]
// url: "http://example.com?msg=hello%20world"	| [ [ "msg", "hello world" ] ]
// url: "http://example.com"					| null

function parseQueryString (url) {
	// Ex: URL === http://example.com?a=hello&b=99.
	// Point url to everything after the question mark. Ex: a=hello&b=99".
 	url = url.split('?')[1];
 	// If there is no question mark, return null.
 	// Else, split the new string at the & characters. Ex: ['a=hello','b=99'].
 	// Then map it again spliting each item at the = character. Ex: [[a,hello],[b,99]].
 	return url ? url.split('&').map( paramaters => decodeURIComponent(paramaters))
	.map( pair => pair.split('='))  : null;
}