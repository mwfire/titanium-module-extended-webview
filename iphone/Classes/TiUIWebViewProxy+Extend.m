//
//  TiUIWebViewProxy+Extend.m
//  ExtWebView
//
//  Created by Martin Wildfeuer on 13.02.15.
//
//

#import "TiUIWebViewProxy+Extend.h"
#import "TiUIWebView+Extend.h"
#import <objc/runtime.h>

@implementation TiUIWebViewProxy (Extend)


-(void)scrollToTop:(id)args
{
    ENSURE_UI_THREAD(scrollToTop, args);
    [(TiUIWebView *)[self view] scrollToTop:args];
}

-(void)scrollTo:(id)args
{
    ENSURE_UI_THREAD(scrollTo, args);
    [(TiUIWebView *)[self view] scrollTo:args];

}

-(void)scrollToBottom:(id)args
{
    ENSURE_UI_THREAD(scrollToBottom, args);
    [(TiUIWebView *)[self view] scrollToBottom:args];
}

@end
