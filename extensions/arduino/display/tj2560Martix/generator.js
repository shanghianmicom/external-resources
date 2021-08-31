/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tj2560Martix_drawpPxel = function (block) {
        const port = block.getFieldValue('PORT');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        Blockly.Arduino.includes_.tj2560Martix_init = `#include <LedControl.h>`;
        Blockly.Arduino.definitions_[`tj2560Martix_init_${port}`] = `LedControl lc_${port} = LedControl(pinMap[${port}][S5], pinMap[${port}][S6], pinMap[${port}][S2], 1);`;
        Blockly.Arduino.setups_[`tj2560Martix_init_${port}`] = `lc_${port}.shutdown(0,false);\n  lc_${port}.setIntensity(0, 8);\n  lc_${port}.clearDisplay(0);`;

        return `lc_${port}.setLed(0,${x},${y},${colour});\n`;
    };

    Blockly.Arduino.tj2560Martix_clear = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        Blockly.Arduino.includes_.tj2560Martix_init = `#include <LedControl.h>`;
        Blockly.Arduino.definitions_[`tj2560Martix_init_${port}`] = `LedControl lc_${port} = LedControl(pinMap[${port}][S5], pinMap[${port}][S6], pinMap[${port}][S2], 1);`;
        Blockly.Arduino.setups_[`tj2560Martix_init_${port}`] = `lc_${port}.shutdown(0,false);\n  lc_${port}.setIntensity(0, 8);\n  lc_${port}.clearDisplay(0);`;

        return `lc_${port}.clearDisplay(0);\n`;
    };

    return Blockly;
}

exports = addGenerator;
