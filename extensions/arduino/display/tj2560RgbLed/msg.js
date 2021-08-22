/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560RGBLED_CATEGORY: 'Single Rgb Led',
        TJ2560RGBLED_SETPIXELCOLOR: 'set %1 rgb led color %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560RGBLED_CATEGORY: 'RGB LED',
        TJ2560RGBLED_SETPIXELCOLOR: '设置 %1 全彩led颜色 %2'
    });
    return Blockly;
}

exports = addMsg;
