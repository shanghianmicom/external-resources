/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tj2560ThreeLineTracker_read = function (block) {
        const port = block.getFieldValue('PORT');
        const side = block.getFieldValue('SIDE');

        Blockly.Arduino.setups_[`tj2560ThreeLineTracker_read${port}`] = `pinMode(pinMap[${port}][${side}], INPUT_PULLUP);`;
        Blockly.Arduino.includes_.arduinoTj2560Ext_onBoardDriver_io = `#include <io_tj2560.h>`;

        return [`!digitalRead(pinMap[${port}][${side}])`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
