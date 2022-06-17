/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560LightIntensity_read = function (block) {
        const port = block.getFieldValue('PORT');

        Blockly.Arduino.setups_[`tj2560LightIntensity_read${port}`] = `pinMode(pinMap[${port}][S1], INPUT);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`map(constrain(analogRead(pinMap[${port}][S1]), 0, 850), 0, 850, 1023, 0)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
