# ExtendedWebView Module 0.5

## Description

This module extends the original Ti.UI.WebView by adding several new features.

###Note:
Version 0.5 of this module is not backwards compatible.
Please see the **usage** paragraph for more information.

## Installation
Extract the *.zip file in the `iPhone` folder of this package.<br>
Copy the module to your Titanium module folder, typically

    ~/Library/Application Support/Titanium/modules
    

 
## Adding the module to your project
In Titanium Studio, add the module to your project. Open tiapp.xml and click the <b>+</b> button in the module section. Select <i>de.mwfire.extwebview</i> and add it.


## Reference

`setZoomScale(float, { animated: BOOL })`<br>
Sets the zoom level of a WebView.<br>
*float* required, 0.0 is standard zoom

`scrollTo({ x:float, y:float, animated: BOOL })`<br>
Scrolls to specific x/y coordinates.<br>
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

###Classic
See `example/app.js`

###Alloy

####index.xml
```xml
<Alloy>
    <Window class="container">
	    <WebView id="webView" url="http://www.mwfire.de"/>
	    <Button onClick="reset" id="resetButton" class="left">Reset</Button>
	    <Button onClick="zoomIn" id="zoomInButton" class="right">Zoom In</Button>
	    <Button onClick="zoomOut" id="zoomOutButton" class="left">Zoom Out</Button>
	    <Button onClick="scrollTo" id="scrollToButton" class="right">Scroll to</Button>
	    <Button onClick="scrollTop" id="scrollTopButton" class="left">Scroll to top</Button>
	    <Button onClick="scrollBottom" id="scrollBottomButton" class="right">Scroll to bottom</Button>
    </Window>
</Alloy>
```
    
####index.js
```javascript
$.index.open();

function reset() {
    zoomOut();
    scrollTop();
}

function zoomIn() {
    $.webView.setZoomScale(2.0);
}

function zoomOut() {
    $.webView.setZoomScale(0.0);
}

function scrollTo() {
    $.webView.scrollTo({ x:100.0, y: 100.0, animated: true });
}

function scrollTop() {
    $.webView.scrollToTop();
}

function scrollBottom() {
    $.webView.scrollToBottom();
}
```
	
####index.tss
```javascript
".container": {
	backgroundColor: "white"
}

"Button": {
	height: "40dp",
	backgroundColor: "white"
}

".left": {
	left: "2%",
	right: "51%"
}

".right": {
	left: "51%",
	right: "2%"
}

"#resetButton":  {
	bottom: "110dp"
}

"#zoomInButton":  {
	bottom: "110dp"
}

"#zoomOutButton":  {
	bottom: "60dp"
}

"#scrollToButton":  {
	bottom: "60dp"
}

"#scrollTopButton":  {
	bottom: "10dp"
}
"#scrollBottomButton":  {
	bottom: "10dp"
}
```

## Platform
Up to now, only iPhone is supported.<br>
Minimum Titanium SDK is 3.5.0.GA<br>
Supports iOS 7.1 and later 

##Changelog
####V0.5
- Extend Ti.UI.WebView instead of a standalone module
- Fixed build error on device

####V0.4
- 64bit support
- Alloy example

## Author

© 2015 Martin Wildfeuer<br>
mwfire web development<br>
[www.mwfire.de](http://www.mwfire.de)

## License

Licensed under the Apache License, Version 2.0 (the "License")