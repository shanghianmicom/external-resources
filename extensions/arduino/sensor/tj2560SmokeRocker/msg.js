/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SMOKEROCKER_CATEGORY: 'Rocker',
        TJ2560SMOKEROCKER_READSWITCH: 'read %1 rocker switch',
        TJ2560SMOKEROCKER_READROCKER: 'read %1 rocker %2',
        TJ2560SMOKEROCKER_HORIZONTAL: 'horizontal',
        TJ2560SMOKEROCKER_VERTICAL: 'vertical'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SMOKEROCKER_CATEGORY: '摇杆',
        TJ2560SMOKEROCKER_READSWITCH: '读取 %1 摇杆开关',
        TJ2560SMOKEROCKER_READROCKER: '读取 %1 摇杆 %2',
        TJ2560SMOKEROCKER_HORIZONTAL: '水平',
        TJ2560SMOKEROCKER_VERTICAL: '垂直'
    });
    return Blockly;
}

exports = addMsg;
