/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560MARTIX_CATEGORY: 'Matrix Display',
        TJ2560MARTIX_DRAWPIXEL: 'martix display %1 draw pixel x: %2 y: %3 color %4',
        TJ2560MARTIX_COLOR_RED: 'red',
        TJ2560MARTIX_COLOR_BLACK: 'black',
        TJ2560MARTIX_CLEAR: 'clear %1 martix display',
        TJ2560MARTIX_SETINTENSITY: 'martix display %1 set intensity %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560MARTIX_CATEGORY: '点阵模块',
        TJ2560MARTIX_DRAWPIXEL: '点阵模块 %1 绘制点 x: %2 y: %3 颜色 %4',
        TJ2560MARTIX_COLOR_RED: '红色',
        TJ2560MARTIX_COLOR_BLACK: '黑色',
        TJ2560MARTIX_CLEAR: '清除 %1 点阵模块',
        TJ2560MARTIX_SETINTENSITY: '点阵模块 %1 设置亮度 %2'
    });
    return Blockly;
}

exports = addMsg;
