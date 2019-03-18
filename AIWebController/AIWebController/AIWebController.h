//
//  AIWebController.h
//  AIWebController
//
//  Created by luoty on 2019/3/5.
//  Copyright © 2019年 luoty. All rights reserved.
//

#import <UIKit/UIKit.h>

/**
 *  @brief 加载WKWebView的控制器
 **/
@interface AIWebController : UIViewController

/**
 *  @brief 加载的H5的链接
 **/
@property (nonatomic, copy  )   NSString *url;

/**
 *  @brief 自定义的UA，默认为""
 **/
@property (nonatomic, copy  )   NSString *userAgent;

/**
 *  @brief url的requestHeader里的内容，string形式的key和value，默认@{}
 **/
@property (nonatomic, copy  )   NSDictionary *headerParams;

/**
 *  JS 调用OC 注册 messageHandler 的方法名
 *  window.webkit.messageHandlers.<name>.postMessage(<messageBody>)
 *  eg. @[@"showA",@"showB"];
 *
 *  window.webkit.messageHandlers.<name>.postMessage(<messageBody>)
 *  已存在的默认方法：
 */
@property (nonatomic, copy  )   NSArray<NSString *> *jsNamesArray;

/**
 *  OC调用JS方法
 *  jsMethod js内容
 *  eg. [NSString stringWithFormat:@"writeCardCallback(%@);",[array toJSONString]];
 */
- (void)handleJS:(NSString *)js;

/**
 *  @brief 加载URL
 **/
- (void)loadUrl;

/**
 *  @brief 刷新界面
 */
- (void)refresh;



@end
