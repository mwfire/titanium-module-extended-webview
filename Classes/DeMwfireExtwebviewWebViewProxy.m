/**
 * Extended Web View
 * Copyright (c) 2009-2013 by mwfire web development.
 * All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "DeMwfireExtwebviewWebViewProxy.h"

@implementation DeMwfireExtwebviewWebViewProxy

-(void)scrollToTop:(id)args
{
    [[self view] performSelectorOnMainThread:@selector(scrollToTop:) withObject:args waitUntilDone:NO];
}

@end
