/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560LINETRAKER_CATEGORY: 'Line Tracker',
        TJ2560LINETRAKER_READ: 'read %1 line tracker'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560LINETRAKER_CATEGORY: '循迹传感器',
        TJ2560LINETRAKER_READ: '读取 %1 循迹传感器'
    });
    return Blockly;
}

exports = addMsg;
