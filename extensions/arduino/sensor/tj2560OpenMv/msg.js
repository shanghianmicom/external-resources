/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560OPENMV_CATEGORY: 'Camera Module',
        TJ2560OPENMV_SETPORT: 'set camera module port as %1',
        TJ2560OPENMV_SETMODE: 'set camera module to %1 mode',
        TJ2560OPENMV_SETMODE_COLORMODE: 'color block',
        TJ2560OPENMV_SETMODE_QRCODEMODE: 'QR code',
        TJ2560OPENMV_SETMODE_LINEMODE: 'line track',
        TJ2560OPENMV_SETLIGHT: 'set camera light %1',
        TJ2560OPENMV_SETLIGHT_CLOSEALLLIGHT: 'close all',
        TJ2560OPENMV_SETLIGHT_OPENREDLIGHT: 'open red light',
        TJ2560OPENMV_SETLIGHT_OPENGREENLIGHT: 'open green light',
        TJ2560OPENMV_SETLIGHT_OPENBLUELIGHT: 'open blue light',
        TJ2560OPENMV_SETLIGHT_OPENIRLIGHT: 'open IR light',
        TJ2560OPENMV_SETLIGHT_OPENALLLIGHT: 'open all light',
        TJ2560OPENMV_RESETWHITEBALANCE: 'camera module reset white balance',
        TJ2560OPENMV_LEARNCOLORBLOCK: 'camera module learn color block',
        TJ2560OPENMV_GETCOLORBLOCKPOSITION: 'camera module get color block position',
        TJ2560OPENMV_COLORBLOCKPOSITIONX: 'color block position X axis value',
        TJ2560OPENMV_COLORBLOCKPOSITIONY: 'color block position Y axis value',
        TJ2560OPENMV_GETQRCODEPOSITION: 'camera module get QR code block position',
        TJ2560OPENMV_QRCODEPOSITIONX: 'QR code position X axis value',
        TJ2560OPENMV_QRCODEPOSITIONY: 'QR code position Y axis value',
        TJ2560OPENMV_GETQRCODEWHPOSITION: 'camera module get QR code block WH position',
        TJ2560OPENMV_QRCODEWHPOSITIONX: 'QR code HW position X axis value',
        TJ2560OPENMV_QRCODEWHPOSITIONY: 'QR code HW position Y axis value',
        TJ2560OPENMV_GETQRCODEVALUE: 'camera module get QR code value and version',
        TJ2560OPENMV_QRCODEVALUESTRING: 'camera module QR code string',
        TJ2560OPENMV_QRCODEVALUEVERSION: 'camera module QR code version',
        TJ2560OPENMV_GETQRECCMASK: 'camera module get QR code ECC and mask',
        TJ2560OPENMV_QRCODEECC: 'camera module QR ECC level',
        TJ2560OPENMV_QRCODEMASK: 'camera module QR mask',
        TJ2560OPENMV_GETQRCODEDATATYPEANDECI: 'camera module get QR code data type and ECI',
        TJ2560OPENMV_QRCODEDATATYPE: 'camera module QR data type',
        TJ2560OPENMV_QRCODEDATAECI: 'camera module QR ECI',
        TJ2560OPENMV_ISGETQRCODE: 'is camera module get valid QR?',
        TJ2560OPENMV_SETLINETRACKMODE: 'camera module set line track mode %1',
        TJ2560OPENMV_SETLINETRACKMODE_GRAYSCALE: 'grayscale',
        TJ2560OPENMV_SETLINETRACKMODE_COLORFUL: 'colorful',
        TJ2560OPENMV_ON: 'on',
        TJ2560OPENMV_OFF: 'off',
        TJ2560OPENMV_LINE_BLACK: 'black line while bg',
        TJ2560OPENMV_LINE_WHITE: 'while line black bg',
        TJ2560OPENMV_SETLENFLIP: 'camera module set len flip %1 %2',
        TJ2560OPENMV_SETLENFLIP_VERTICAL: 'vertical',
        TJ2560OPENMV_SETLENFLIP_HORIZONTAL: 'horizontal',
        TJ2560OPENMV_GETLINEPOTION: 'camera module line position',
        TJ2560OPENMV_GETLINEANGLE: 'camera module line angle',
        TJ2560OPENMV_GETLINELENGTH: 'camera module line length',
        TJ2560OPENMV_GETLINEERROROUTPUT: 'camera module line error output',
        TJ2560OPENMV_SETLINECOLOR: 'camera module set line color %1',
        TJ2560OPENMV_SETLINETHRESHOLD: 'camera module set line track threshold min %1 max %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560OPENMV_CATEGORY: '视觉模块',
        TJ2560OPENMV_SETPORT: '初始化视觉模块端口 %1',
        TJ2560OPENMV_SETMODE: '设置视觉模块 %1 模式',
        TJ2560OPENMV_SETMODE_COLORMODE: '色块识别',
        TJ2560OPENMV_SETMODE_QRCODEMODE: '二维码识别',
        TJ2560OPENMV_SETMODE_LINEMODE: '巡线',
        TJ2560OPENMV_SETLIGHT: '设置补光 %1',
        TJ2560OPENMV_SETLIGHT_CLOSEALLLIGHT: '全部关闭灯',
        TJ2560OPENMV_SETLIGHT_OPENREDLIGHT: '打开红灯',
        TJ2560OPENMV_SETLIGHT_OPENGREENLIGHT: '打开绿灯',
        TJ2560OPENMV_SETLIGHT_OPENBLUELIGHT: '打开蓝灯',
        TJ2560OPENMV_SETLIGHT_OPENIRLIGHT: '打开红外灯',
        TJ2560OPENMV_SETLIGHT_OPENALLLIGHT: '打开全部灯',
        TJ2560OPENMV_RESETWHITEBALANCE: '视觉模块重置白平衡',
        TJ2560OPENMV_LEARNCOLORBLOCK: '视觉模块学习色块数据',
        TJ2560OPENMV_GETCOLORBLOCKPOSITION: '视觉模块读取色块位置',
        TJ2560OPENMV_COLORBLOCKPOSITIONX: '色块 X 坐标数值',
        TJ2560OPENMV_COLORBLOCKPOSITIONY: '色块 Y 坐标数值',
        TJ2560OPENMV_GETQRCODEPOSITION: '视觉模块读取二维码边界框 XY 坐标',
        TJ2560OPENMV_QRCODEPOSITIONX: '二维码边界框 X 坐标数值',
        TJ2560OPENMV_QRCODEPOSITIONY: '二维码边界框 Y 坐标数值',
        TJ2560OPENMV_GETQRCODEWHPOSITION: '视觉模块读取二维码边界框 WH 坐标',
        TJ2560OPENMV_QRCODEWHPOSITIONX: '二维码边界框 W 坐标数值',
        TJ2560OPENMV_QRCODEWHPOSITIONY: '二维码边界框 H 坐标数值',
        TJ2560OPENMV_GETQRCODEVALUE: '视觉模块读取二维码效载荷字符串与版本信息',
        TJ2560OPENMV_QRCODEVALUESTRING: '二维码效载荷字符串',
        TJ2560OPENMV_QRCODEVALUEVERSION: '二维码版本信息',
        TJ2560OPENMV_GETQRECCMASK: '视觉模块读取二维码 ECC 水平与掩码',
        TJ2560OPENMV_QRCODEECC: '二维码 ECC 水平',
        TJ2560OPENMV_QRCODEMASK: '二维码掩码',
        TJ2560OPENMV_GETQRCODEDATATYPEANDECI: '视觉模块读取二维码数据类型与ECI',
        TJ2560OPENMV_QRCODEDATATYPE: '二维码数据类型',
        TJ2560OPENMV_QRCODEDATAECI: '二维码 ECI',
        TJ2560OPENMV_ISGETQRCODE: '视觉模块检测到二维码？',
        TJ2560OPENMV_SETLINETRACKMODE: '视觉模块设置巡线为 %1 模式',
        TJ2560OPENMV_SETLINETRACKMODE_GRAYSCALE: '灰度',
        TJ2560OPENMV_SETLINETRACKMODE_COLORFUL: '彩色',
        TJ2560OPENMV_ON: '开',
        TJ2560OPENMV_OFF: '关',
        TJ2560OPENMV_SETLENFLIP: '视觉模块设置镜头 %1 反转 %2',
        TJ2560OPENMV_SETLENFLIP_VERTICAL: '垂直',
        TJ2560OPENMV_SETLENFLIP_HORIZONTAL: '水平',
        TJ2560OPENMV_GETLINEPOTION: '线和图像边缘距离值',
        TJ2560OPENMV_GETLINEANGLE: '线条角度值',
        TJ2560OPENMV_GETLINELENGTH: '巡线模长',
        TJ2560OPENMV_GETLINEERROROUTPUT: '误差输出',
        TJ2560OPENMV_SETLINECOLOR: '视觉模块设置巡线颜色 %1',
        TJ2560OPENMV_LINE_BLACK: '白底黑线',
        TJ2560OPENMV_LINE_WHITE: '黑底白线',
        TJ2560OPENMV_SETLINETHRESHOLD: '视觉模块设置巡线阈值 最小值 %1 最大值 %2'
    });
    return Blockly;
}

exports = addMsg;
