/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560LED_CATEGORY: 'Led',
        TJ2560LED_SET: 'set %1 led %2',
        TJ2560LED_ON: 'on',
        TJ2560LED_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560LED_CATEGORY: 'Led',
        TJ2560LED_SET: '设置 %1 led %2',
        TJ2560LED_ON: '开',
        TJ2560LED_OFF: '关'
    });
    return Blockly;
}

exports = addMsg;
