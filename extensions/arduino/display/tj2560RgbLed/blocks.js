/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#2ce89f';
    const secondaryColour = '#2ce89f';

    Blockly.Blocks.tj2560RgbLed_setPixelColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560RGBLED_SETPIXELCOLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P1', 'P1'],
                            ['P2', 'P2'],
                            ['P3', 'P3'],
                            ['P4', 'P4'],
                            ['P5', 'P5'],
                            ['P6', 'P6']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
