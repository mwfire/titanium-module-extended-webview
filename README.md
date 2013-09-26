# ExtendedWebView Module 0.1

## Description

This module extends the original Ti.UI.WebView by adding the methods `setZoomLevel()` and `scrollToTop()`
 
## Accessing the ExtendedWebView Module

To access this module from JavaScript, you would do the following:

	var extendedWebView = require("de.mwfire.extwebview");

The extendedWebView variable is a reference to the Module object.	

## Reference

**setZoomLevel(float)**
Sets the zoom level of a WebView. Must contain int/floats.
Use setZoomLevel(0) to reset zoom.
    
**scrollToTop()**
Scrolls to the top of a WebView.

## Usage

See the example app.js for usage.

## Platform
Up to now, only iPhone is supported.

## Author

© 2013 Martin Wildfeuer<br>
mwfire web development<br>
[www.mwfire.de](http://www.mwfire.de)

## License

Licensed under the Apache License, Version 2.0 (the "License")
