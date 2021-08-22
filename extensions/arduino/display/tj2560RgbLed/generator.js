/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560RgbLed_setPixelColor = function (block) {
        const port = block.getFieldValue('PORT');
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        Blockly.Arduino.includes_.tj2560RgbLed_setPixelColor = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_[`tj2560RgbLed_setPixelColor_${port}`] = `Adafruit_NeoPixel ledStrip_${port}(1, pinMap[${port}][S5], NEO_GRB + NEO_KHZ800);`;
        Blockly.Arduino.setups_[`tj2560RgbLed_setPixelColor_${port}`] = `ledStrip_${port}.begin();`;

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return `ledStrip_${port}.setPixelColor(0, ${colour});\nledStrip_${port}.show();\n`;
    };

    return Blockly;
}

exports = addGenerator;
