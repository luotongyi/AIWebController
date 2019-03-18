
/**
 * 有备注 “字段需要补充”的地方，可以根据需要去补充字段
 * AIOpenPaperlessPage
 * AIReadIDCardCallback
 * AIReadSIMCardCallback
 * AIWriteSIMCard
 * AITakePhotoCallback
 * AIFaceRecognition
 */

var isIos = false;
var isAndroid = false;

$(function () {
	//获取客户端为IOS或ANDROID
    isIos = navigator.userAgent.match(/(iPhone|iPad|iOS)/i) != null;
    isAndroid = navigator.userAgent.match(/(Android)/i) != null;

    console.log(isIos);
    console.log(isAndroid);
});
// =================================================
/*
 * 打开新的web界面
 * 默认情况下只传url
 */
function AIOpenWebPage(url){
	var info = {
		'url':url
	};
	if (isIos) {
		window.webkit.messageHandlers.AIOpenWebPage.postMessage(info);
	} else if (isAndroid) {
		AIAppFunLoader.AIOpenWebPage(JSON.stringify(info));
	} else {};
}

/*
 * 新的web界面刷新功能
 */
function AIWebRefresh(){
    if (isIos) {
        window.webkit.messageHandlers.AIWebRefresh.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIWebRefresh();
    } else {};
}

/*
 * 新的web界面的goback，web的history
 */
function AIWebGoback(){
    if (isIos) {
        window.webkit.messageHandlers.AIWebGoback.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIWebGoback();
    } else {};
}

/*
 * 新的web界面关闭功能，直接返回到打开web界面之前的界面
 */
function AIWebClose(){
    if (isIos) {
        window.webkit.messageHandlers.AIWebClose.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIWebClose();
    } else {};
}
// =================================================
/*
 * 扫码功能
 * scan、"gotoPage":{"page":"codeSNer"}
 */
function AIScanner(){
    if (isIos) {
        window.webkit.messageHandlers.AIScanner.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIScanner();
    } else {};
}

/*
 * 扫码功能回调，需要按照项目需求实现功能
 * 返回扫码之后的string
 * scan、"gotoPage":{"page":"codeSNer"}
 */
function AIScannerCallback(info){
    return info;
}
// =================================================
/*
 * 定位功能，获取经纬度、地址
 * getLngAndLatAddress
 */
function AILocation () {
    if (isIos) {
        window.webkit.messageHandlers.AILocation.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AILocation();
    } else {};
}

/*
 * 定位功能回调
 * 返回的是json对象的string，包括经度、纬度、详细地址
 * getLngAndLatAddress
 */
function AILocationCallback(locationInfo){
    var info = {
        'lat':locationInfo.lat,
        'lng':locationInfo.lng
    };
    return info;
}
// =================================================
/*
 * 调用无纸化功能
 * paperLess
 */
function AIOpenPaperlessPage (paperInfo) {
    var info = {
        //字段需要补充

    };
    if (isIos) {
        window.webkit.messageHandlers.AIOpenPaperlessPage.postMessage(info);
    } else if (isAndroid) {
        AIAppFunLoader.AIOpenPaperlessPage(JSON.stringify(info));
    } else {};
}
// =================================================
/*
 * 摇一摇获取经纬度
 * sharktomap
 */
function AIShake(){
    if (isIos) {
        window.webkit.messageHandlers.AIShake.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIShake();
    } else {};
}

/*
 * 获取经纬度返回内容
 * 返回的是json对象的string，包括经度、纬度、详细地址
 * 详细地址address，可不传或者传''
 * sharktomap
 */
function AIShakeCallback(locationInfo){
    var info = {
        'address':locationInfo.address,
        'lat':locationInfo.lat,
        'lng':locationInfo.lng
    };
    return info;
}

// =================================================
/*
 * 蓝牙连接
 */
function AIBluetoothConnect () {
    if (isIos) {
        window.webkit.messageHandlers.AIBluetoothConnect.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIBluetoothConnect();
    } else {};
}
// =================================================
/*
 * 读取身份证
 * “idCard”,'*'
 */
function AIReadIDCard () {
    if (isIos) {
        window.webkit.messageHandlers.AIReadIDCard.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIReadIDCard();
    } else {};
}

/*
 * 读取身份证回调
 * “idCard”,'*'
 */
function AIReadIDCardCallback (idCardInfo) {
    var info = {
        'address':idCardInfo.address,
        'sex':idCardInfo.sex
        //字段需要补充

    };
    return info;
}
// =================================================
/*
 * 读SIM卡
 * “idCard”,'*'
 */
function AIReadSIMCard () {
    if (isIos) {
        window.webkit.messageHandlers.AIReadSIMCard.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AIReadSIMCard();
    } else {};
}

/*
 * 读SIM卡回调
 */
function AIReadSIMCardCallback (simCardInfo) {
    var info = {
        //字段需要补充

    };
    return obj;
}
// =================================================
/*
 * 写SIM卡
 * “idCard”,'*'
 */
function AIWriteSIMCard (simCardInfo) {
    var info = {
        //字段需要补充

    };
    if (isIos) {
        window.webkit.messageHandlers.AIWriteSIMCard.postMessage(info);
    } else if (isAndroid) {
        AIAppFunLoader.AIWriteSIMCard(JSON.stringify(info));
    } else {};
}

/*
 * 写卡回调，返回成功/失败
 * string格式的内容： '0'、'1'
 * “idCard”,'*'
 */
function AIWriteSIMCardCallback (info) {
    return info;
}
// =================================================
/*
 * 拍照
 * startCamera
 */
function AITakePhoto () {
    if (isIos) {
        window.webkit.messageHandlers.AITakePhoto.postMessage(null);
    } else if (isAndroid) {
        AIAppFunLoader.AITakePhoto();
    } else {};
}

/*
 * 拍照回调
 * 一般情况下返回的是图片base64的string，但是图片太大会上传失败
 * 可以根据需要定制该内容
 * startCamera
 */
function AITakePhotoCallback (photoInfo) {
    var info = {
        //字段需要补充
        'image':photoInfo.image
    };
    return info;
}
// =================================================
/*
 * 人脸识别
 * {“facialRecog”:”facialRecog”,”compareId”:””,”fromPagecode”:””,”toPagecode”:””}
 */
function AIFaceRecognition (recognitionInfo) {
    var info = {
        //字段需要补充

    };
    if (isIos) {
        window.webkit.messageHandlers.AIFaceRecognition.postMessage(info);
    } else if (isAndroid) {
        AIAppFunLoader.AIFaceRecognition(JSON.stringify(info));
    } else {};
}


