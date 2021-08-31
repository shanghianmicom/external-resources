/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560FOURDIGITALDISPLAY_CATEGORY: '4 Digital Display',
        TJ2560FOURDIGITALDISPLAY_SHOWNUMBER: '4 digital display show number %1',
        TJ2560FOURDIGITALDISPLAY_SETDOT: '4 digital display set %1 rd dot %2',
        TJ2560FOURDIGITALDISPLAY_STATE_ON: 'on',
        TJ2560FOURDIGITALDISPLAY_STATE_OFF: 'off',
        tj2560FourDigitalDisplay_CLEAR: 'clear 4 digital display'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560FOURDIGITALDISPLAY_CATEGORY: '4位数码管',
        TJ2560FOURDIGITALDISPLAY_SHOWNUMBER: '4位数码管显示数字 %1',
        TJ2560FOURDIGITALDISPLAY_SETDOT: '4位数码管设置第 %1 位点 %2',
        TJ2560FOURDIGITALDISPLAY_STATE_ON: '开',
        TJ2560FOURDIGITALDISPLAY_STATE_OFF: '关',
        tj2560FourDigitalDisplay_CLEAR: '清除4位数码管'
    });
    return Blockly;
}

exports = addMsg;
