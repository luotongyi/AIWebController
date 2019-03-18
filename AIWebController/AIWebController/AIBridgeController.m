//
//  AIBridgeController.m
//  TestDemo
//
//  Created by luoty on 2019/3/18.
//  Copyright © 2019年 luoty. All rights reserved.
//

#import "AIBridgeController.h"
#import "AIWebController.h"

@interface AIBridgeController ()
{
    UINavigationController *bridgeNav;
}
@end

@implementation AIBridgeController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    AIWebController *controller = [AIWebController new];
    controller.url = @"https://www.jianshu.com/u/2d18249cc9e2";
    
    bridgeNav = [[UINavigationController alloc]initWithRootViewController:controller];
    [self.view addSubview:bridgeNav.view];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}



@end
