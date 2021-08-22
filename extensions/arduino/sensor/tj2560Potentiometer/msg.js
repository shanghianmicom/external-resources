/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560POTENTIOMETER_CATEGORY: 'Potentiometer',
        TJ2560POTENTIOMETER_READ: 'read %1 potentiometer'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560POTENTIOMETER_CATEGORY: '电位器',
        TJ2560POTENTIOMETER_READ: '读取 %1 电位器'
    });
    return Blockly;
}

exports = addMsg;
