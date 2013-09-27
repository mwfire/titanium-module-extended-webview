# ExtendedWebView Module 0.2

## Description

This module extends the original Ti.UI.WebView by adding several new features.

## Installation
Extract the *.zip file in the root of this package.<br>
Copy the module to your Titanium module folder, typically

    ~/Library/Application Support/Titanium/modules
    

 
## Accessing the Module

To access this module from JavaScript, you would do the following:

	var extendedWebView = require("de.mwfire.extwebview");

The extendedWebView variable is a reference to the Module object.	

## Reference

`setZoomScale(float, { animated: BOOL })`<br>
Sets the zoom level of a WebView.<br>
*float* optional, defaults to 0<br>
*animated* optional, defaults to TRUE

`scrollTo({ x:float, y:float, animated: BOOL })`<br>
Sets the zoom level of a WebView.<br>
*x* optional, defaults to 0<br>
*y* optional, defaults to 0<br>
*animated* optional, defaults to TRUE
    
`scrollToTop({ animated: BOOL })`<br>
Scrolls to the top of a WebView.<br>
*animated* optional, defaults to TRUE

`scrollToBottom({ animated: BOOL })`<br>
Scrolls to the bottom of a WebView.<br>
*animated* optional, defaults to TRUE

## Usage

Create an extended webview like in this example and add it to your window

    var extendedWebView = require("de.mwfire.extwebview");
    var webView = extendedWebView.createWebView({
        left            : 0,
        right           : 0,
        top             : 0,
        bottom          : 140,
        url             : "http://www.mwfire.de",
        scalesPageToFit : true
    });
    win.add(webView);

For method usage, see the example app.js.

## Platform
Up to now, only iPhone is supported.<br>
Minimum Titanium SDK is 3.1.0.GA<br>
Supports iOS6 and later 

## Author

© 2013 Martin Wildfeuer<br>
mwfire web development<br>
[www.mwfire.de](http://www.mwfire.de)

## License

Licensed under the Apache License, Version 2.0 (the "License")
