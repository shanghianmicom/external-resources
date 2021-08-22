/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#7700FF';
    const secondaryColour = '#4400B3';

    Blockly.Blocks.tj2560FourButton_read = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560FOURBUTTON_READ,
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
                        type: 'field_dropdown',
                        name: 'BUTTON',
                        options: [
                            ['U', 'S1'],
                            ['R', 'S5'],
                            ['D', 'S6'],
                            ['L', 'S2']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
