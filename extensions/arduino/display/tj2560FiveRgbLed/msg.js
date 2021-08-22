/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560FIVERGBLED_CATEGORY: '5 RGB LED',
        TJ2560FIVERGBLED_SETPIXELCOLOR: 'set %1 rgb led pixel %2 color %3',
        TJ2560FIVERGBLED_FILL: 'fill %1 rgb led from pixel %2 count %3 with color %4',
        TJ2560FIVERGBLED_SETBRIGHTNESS: 'set %1 rgb led brightness %2',
        TJ2560FIVERGBLED_CLEAR: 'clear all %1 rgb led'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560FIVERGBLED_CATEGORY: '5 全彩LED',
        TJ2560FIVERGBLED_SETPIXELCOLOR: '设置%1全彩led像素 %2 颜色 %3',
        TJ2560FIVERGBLED_FILL: '填充%1全彩led从像素 %2 开始 共 %3 颜色 %4',
        TJ2560FIVERGBLED_SETBRIGHTNESS: '设置%1全彩led亮度 %2',
        TJ2560FIVERGBLED_CLEAR: '清除所有%1全彩led'
    });
    return Blockly;
}

exports = addMsg;
