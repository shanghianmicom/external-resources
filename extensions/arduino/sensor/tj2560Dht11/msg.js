/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560DHT11_CATEGORY: 'DHT11',
        TJ2560DHT11_READHUMIDITY: 'read %1 dht11 humidity',
        TJ2560DHT11_READTEMPERATURE: 'read %1 dht11 temperature'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560DHT11_CATEGORY: 'DHT11',
        TJ2560DHT11_READHUMIDITY: '读取 %1 dht11 湿度',
        TJ2560DHT11_READTEMPERATURE: '读取 %1 dht11 温度'
    });
    return Blockly;
}

exports = addMsg;
