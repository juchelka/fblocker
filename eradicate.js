setInterval(function() {
	// Remove bullshits
	document.getElementById('rightCol').innerHTML = 'xxx';
	document.getElementById('pagelet_canvas_nav_content').innerHTML = 'xxx';
	document.getElementById('pagelet_ticker').innerHTML = 'xxx';

	var streamContainer = document.getElementById('stream_pagelet');

	var streamMatcher = /^topnews_main_stream/;
	for (i in streamContainer.children) {
		var child = streamContainer.children[i];
		if (streamMatcher.test(child.id))
		{
			streamContainer.removeChild(child);
		}
	}

	if (! document.getElementById('nfe-container')) {
		var nfeContainer = document.createElement("div");
		nfeContainer.id = "nfe-container";
		nfeContainer.innerHTML = "<h2>Sorry, facebook slacking blocked.</h2>";
		streamContainer.appendChild(nfeContainer);		
	}

}, 1000);