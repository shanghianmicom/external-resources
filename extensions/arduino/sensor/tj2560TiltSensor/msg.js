/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560TILTSENSOR_CATEGORY: 'Tilt Sensor',
        TJ2560TILTSENSOR_READ: 'read %1 tilt sensor'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560TILTSENSOR_CATEGORY: '倾斜传感器',
        TJ2560TILTSENSOR_READ: 'read %1 倾斜传感器'
    });
    return Blockly;
}

exports = addMsg;
