/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560ULTRASONIC_CATEGORY: 'Ultrasonic',
        TJ2560ULTRASONIC_READ_DISTANCE: 'ultrasonic sensor %1 read distance(mm)'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560ULTRASONIC_CATEGORY: '超声波',
        TJ2560ULTRASONIC_READ_DISTANCE: '超声波传感器 %1 读取距离(mm)'
    });
    return Blockly;
}

exports = addMsg;
