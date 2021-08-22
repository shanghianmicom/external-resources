/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560SOILMOISTURE_CATEGORY: 'Soil Moisture',
        TJ2560SOILMOISTURE_READDIGITAL: 'read %1 soil moisture digital',
        TJ2560SOILMOISTURE_READANALOG: 'read %1 soil moisture analog'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560SOILMOISTURE_CATEGORY: '土壤湿度',
        TJ2560SOILMOISTURE_READDIGITAL: '读取 %1 土壤湿度数字值',
        TJ2560SOILMOISTURE_READANALOG: '读取 %1 土壤湿度模拟值'
    });
    return Blockly;
}

exports = addMsg;
