/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560TEMPERATURE_CATEGORY: 'Temperature Sensor',
        TJ2560TEMPERATURE_READ: 'temperature sensor read temperature'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560TEMPERATURE_CATEGORY: '温度传感器',
        TJ2560TEMPERATURE_READ: '温度传感器 %1 读取温度'
    });
    return Blockly;
}

exports = addMsg;
