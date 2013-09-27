// Open a single window
var win = Ti.UI.createWindow({
    backgroundColor  : 'white',
    orientationModes : [
	    Ti.UI.LANDSCAPE_LEFT,
	    Ti.UI.LANDSCAPE_RIGHT,
	    Ti.UI.PORTRAIT,
	    Ti.UI.UPSIDE_PORTRAIT
	]
});
win.open();

// Require the module
var extendedWebView= require('de.mwfire.extwebview');
Ti.API.info("module is => " + extendedWebView);

// Create an extended webview
var webView = extendedWebView.createWebView({
    left            : 0,
    right           : 0,
    top             : 0,
    bottom          : 140,
    url             : "http://www.mwfire.de",
    scalesPageToFit : true
});
win.add(webView);

// Add a reset zoom button
var resetButton = Ti.UI.createButton({
    bottom          : 60,
    height          : 35,
    width           : 140,
    left            : 10,
    title           : 'Reset zoom'
});
win.add(resetButton);

resetButton.addEventListener('click', function() {
    // Set zoom level of the webview
    // optional first parameter takes zoom level as float
	// optional second parameter takes object with animation setting
    // webView.setZoomScale(1.2, { animated: false });
    webView.setZoomScale();
});

// Add a scroll to top button
var scrollButton = Ti.UI.createButton({
    right           : 10,
    bottom          : 60,
    height          : 35,
    width           : 140,
    title           : 'Scroll to top'
});
win.add(scrollButton);

scrollButton.addEventListener('click', function() {
    // Scrolls webview to top
    // optional parameter takes object with animation setting
    // webView.scrollToTop({ animated: false });
    webView.scrollToTop();
});

// Add a scrollTo button
var scrollToButton = Ti.UI.createButton({
    bottom          : 10,
    height          : 35,
    width           : 140,
    left            : 10,
    title           : 'Scroll to'
});
win.add(scrollToButton);

scrollToButton.addEventListener('click', function() {
	// Scrolls to a given offset
	// optional parameter takes object are x, y, and animation settings
	// webView.scrollTo( { x:10, y:150, animated: false } );
	webView.scrollTo( { y:150 } );
});

// Add a scroll to top button
var scrollBottomButton = Ti.UI.createButton({
    right           : 10,
    bottom          : 10,
    height          : 35,
    width           : 140,
    title           : 'Scroll to bottom'
});
win.add(scrollBottomButton);

scrollBottomButton.addEventListener('click', function() {
	// Scrolls webview to bottom
    // optional parameter takes object with animation setting
    // webView.scrollToBottom({ animated: false });
    webView.scrollToBottom();
});
