/**
 * Extended Web View
 * Copyright (c) 2009-2013 by mwfire web development.
 * All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "DeMwfireExtwebviewWebViewProxy.h"
#import "DeMwfireExtwebviewWebView.h"

#import "TiUtils.h"

@implementation DeMwfireExtwebviewWebViewProxy


-(void)setZoomScale:(id)value withObject:(id)animated
{
    TiThreadPerformOnMainThread(^{
        [(TiUIWebView *)[self view] setZoomScale_:value withObject:animated];
    }, YES);
}

-(void)scrollToTop:(id)args
{
    TiThreadPerformOnMainThread(^{
        [(TiUIWebView *)[self view] scrollToTop:args];
    }, YES);
}

-(void)scrollTo:(id)args
{
    TiThreadPerformOnMainThread(^{
        [(TiUIWebView *)[self view] scrollTo:args];
    }, YES);
}

-(void)scrollToBottom:(id)args
{
    TiThreadPerformOnMainThread(^{
        [(TiUIWebView *)[self view] scrollToBottom:args];
    }, YES);
}

@end
