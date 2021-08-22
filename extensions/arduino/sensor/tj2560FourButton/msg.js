/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560FOURBUTTON_CATEGORY: '4 Button',
        TJ2560FOURBUTTON_READ: 'read %1 button %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560FOURBUTTON_CATEGORY: '4 按键',
        TJ2560FOURBUTTON_READ: '读取 %1 按键 %2'
    });
    return Blockly;
}

exports = addMsg;
