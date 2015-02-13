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


//// ------ VIEWS ---- ////

// Create an extended webview
var webView = Ti.UI.createWebView({
    left: 0, right: 0, top: 0, bottom : 0,
    url: "http://www.mwfire.de",
    scalesPageToFit : true
});
win.add(webView);

// Add a reset zoom button
var reset = Ti.UI.createButton({
    bottom: "110dp", height: "40dp", left: "2%", right:"51%",
    backgroundColor: "#FFFFFF",
    title: 'Reset'
});
win.add(reset);

// Add a zoom in button
var zoomIn = Ti.UI.createButton({
    bottom: "110dp", height: "40dp", left: "51%", right:"2%",
    backgroundColor: "#FFFFFF",
    title: 'Zoom in'
});
win.add(zoomIn);

// Add a zoom out
var zoomOut = Ti.UI.createButton({
    bottom: "60dp", height: "40dp", left: "2%", right:"51%",
    backgroundColor: "#FFFFFF",
    title: 'Zoom out'
});
win.add(zoomOut);

// Add a scrollTo button
var scrollTo = Ti.UI.createButton({
    bottom: "60dp", height: "40dp", left: "51%", right:"2%",
    backgroundColor: "#FFFFFF",
    title: 'Scroll to'
});
win.add(scrollTo);

// Add a scroll to top button
var scrollTop = Ti.UI.createButton({
    bottom: "10dp", height: "40dp", left: "2%", right:"51%",
    backgroundColor: "#FFFFFF",
    title: 'Scroll to top'
});
win.add(scrollTop);

// Add a scroll to top button
var scrollBottom = Ti.UI.createButton({
    bottom: "10dp", height: "40dp", left: "51%", right:"2%",
    backgroundColor: "#FFFFFF",
    title: 'Scroll to bottom'
});
win.add(scrollBottom);


//// ------ EVENT LISTENERS ---- ////

reset.addEventListener('click', function() {
    webView.scrollToTop();
    webView.setZoomScale(0.0);
});

zoomIn.addEventListener('click', function() {
    // Set zoom level of the webview
    // optional first parameter takes zoom level as float
    // optional second parameter takes object with animation setting
    // webView.setZoomScale(1.2);
    webView.setZoomScale(2.0);
});

zoomOut.addEventListener('click', function() {
    // 0.0 is standard zoom
    webView.setZoomScale(0.0);
});

scrollTo.addEventListener('click', function() {
    // Scrolls to a given offset
    // optional parameter takes object are x, y, and animation settings
    // webView.scrollTo( { x:10, y:150, animated: false } );
    webView.scrollTo( { y:150 } );
});

scrollTop.addEventListener('click', function() {
    // Scrolls webview to top
    // optional parameter takes object with animation setting
    // webView.scrollToTop({ animated: false });
    webView.scrollToTop();
});

scrollBottom.addEventListener('click', function() {
    // Scrolls webview to bottom
    // optional parameter takes object with animation setting
    // webView.scrollToBottom({ animated: false });
    webView.scrollToBottom();
});