/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SMOKECONCENTRATION_CATEGORY: 'Smoke Concentration',
        TJ2560SMOKECONCENTRATION_READDIGITAL: 'read %1 smoke concentration digital',
        TJ2560SMOKECONCENTRATION_READANALOG: 'read %1 smoke concentration analog'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SMOKECONCENTRATION_CATEGORY: '烟雾浓度',
        TJ2560SMOKECONCENTRATION_READDIGITAL: '读取 %1 烟雾浓度传感器数字值',
        TJ2560SMOKECONCENTRATION_READANALOG: '读取 %1 烟雾浓度传感器模拟值'
    });
    return Blockly;
}

exports = addMsg;
