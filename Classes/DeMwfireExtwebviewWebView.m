/**
 * Extended Web View
 * Copyright (c) 2009-2013 by mwfire web development.
 * All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "DeMwfireExtwebviewWebView.h"
#import "TiUtils.h"

@implementation DeMwfireExtwebviewWebView

- (id)init {
    if (self = [super init]) {
    }
    return self;
}

- (void)dealloc {
    [super dealloc];
}

-(void)setZoomLevel_:(NSString*)level
{
    if([self scrollview] != nil) {
        float zoomScale = [TiUtils floatValue:level];
        [[self scrollview] setZoomScale:zoomScale animated:YES];
    }
}

-(void)scrollToTop:(id)args
{
    if([self scrollview] != nil) {
        [[self scrollview] setContentOffset:CGPointZero animated:YES];
    }
}

@end
