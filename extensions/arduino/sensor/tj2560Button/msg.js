/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560BUTTON_CATEGORY: 'Button',
        TJ2560BUTTON_READ: 'read %1 button'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560BUTTON_CATEGORY: '按键',
        TJ2560BUTTON_READ: '读取 %1 按键'
    });
    return Blockly;
}

exports = addMsg;
