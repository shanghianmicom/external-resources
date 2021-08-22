/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SOUND_CATEGORY: 'Sound Sensor',
        TJ2560SOUND_READDIGITAL: 'read %1 sound sensor digital',
        TJ2560SOUND_READANALOG: 'read %1 sound sensor analog'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SOUND_CATEGORY: '声音传感器',
        TJ2560SOUND_READDIGITAL: '读取 %1 声音传感器数字值',
        TJ2560SOUND_READANALOG: '读取 %1 声音传感器模拟值'
    });
    return Blockly;
}

exports = addMsg;
