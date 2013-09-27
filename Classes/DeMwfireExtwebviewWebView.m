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


-(void)setZoomScale_:(id)value withObject:(id)property
{
    CGFloat scale = [TiUtils floatValue:value def:0];
	BOOL animated = [TiUtils boolValue:@"animated" properties:property def:YES];
	[[self scrollview] setZoomScale:scale animated:animated];
}

-(void)scrollToTop:(id)args
{
    BOOL animated = [TiUtils boolValue:@"animated" properties:[args objectAtIndex:0] def:YES];
    [[self scrollview] setContentOffset:CGPointZero animated:animated];
}

-(void)scrollTo:(id)args
{
    CGFloat offsetX = [TiUtils floatValue:@"x" properties:[args objectAtIndex:0] def:0];
    CGFloat offsetY = [TiUtils floatValue:@"y" properties:[args objectAtIndex:0] def:0];
    BOOL animated = [TiUtils boolValue:@"animated" properties:[args objectAtIndex:0] def:YES];
    
    UIScrollView *currScrollView = [self scrollview];
    CGPoint newOffset = CGPointMake(offsetX, offsetY);
    [currScrollView setContentOffset:newOffset animated:animated];
}

-(void)scrollToBottom:(id)args
{
    BOOL animated = [TiUtils boolValue:@"animated" properties:[args objectAtIndex:0] def:YES];
    
    UIScrollView *currScrollView = [self scrollview];
    
    CGSize svContentSize = currScrollView.contentSize;
    CGSize svBoundSize = currScrollView.bounds.size;
    CGFloat svBottomInsets = currScrollView.contentInset.bottom;
    
    CGFloat bottomHeight = svContentSize.height - svBoundSize.height + svBottomInsets;
    CGFloat bottomWidth = svContentSize.width - svBoundSize.width;
    
    CGPoint newOffset = CGPointMake(bottomWidth,bottomHeight);
    
    [currScrollView setContentOffset:newOffset animated:animated];
}

@end
