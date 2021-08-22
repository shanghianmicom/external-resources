/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560BUMPSWITCH_CATEGORY: 'Bump Switch',
        TJ2560BUMPSWITCH_READ: 'read %1 bump switch'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560BUMPSWITCH_CATEGORY: '碰撞开关',
        TJ2560BUMPSWITCH_READ: '读取 %1 碰撞开关'
    });
    return Blockly;
}

exports = addMsg;
