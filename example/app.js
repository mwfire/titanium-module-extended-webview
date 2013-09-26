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

// Create a extended webview
var webView = extendedWebView.createWebView({
    left            : 0,
    right           : 0,
    top             : 0,
    bottom          : 65,
    url             : "http://www.mwfire.de",
    scalesPageToFit : true
});
win.add(webView);

// Add a reset zoom button
var resetButton = Ti.UI.createButton({
    bottom          : 10,
    height          : 35,
    width           : 140,
    left            : 10,
    title           : 'Reset zoom'
});
win.add(resetButton);

resetButton.addEventListener('click', function() {
    // Set zoom level
    // Parameter is a float
    // 0 resets zoom
    webView.setZoomLevel(0);
});

// Add a scroll to top button
var scrollButton = Ti.UI.createButton({
    right           : 10,
    bottom          : 10,
    height          : 35,
    width           : 140,
    title           : 'Scroll to top'
});
win.add(scrollButton);

scrollButton.addEventListener('click', function() {
    // Scrolls webview to top
    webView.scrollToTop();
});
