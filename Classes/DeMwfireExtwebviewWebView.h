/**
 * Extended Web View
 * Copyright (c) 2009-2013 by mwfire web development.
 * All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#define USE_TI_UIWEBVIEW

#import "TiUIWebView.h"
#import <UIKit/UIKit.h>

@interface DeMwfireExtwebviewWebView : TiUIWebView {

}

-(void)scrollTo:(id)args;
-(void)scrollToTop:(id)args;
-(void)scrollToBottom:(id)args;

@end
