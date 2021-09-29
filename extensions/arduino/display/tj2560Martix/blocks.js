/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#06603e';
    const secondaryColour = '#06603e';

    Blockly.Blocks.tj2560Martix_drawpPxel = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560MARTIX_DRAWPIXEL,
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
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.TJ2560MARTIX_COLOR_RED, 'HIGH'],
                            [Blockly.Msg.TJ2560MARTIX_COLOR_BLACK, 'LOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560Martix_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560MARTIX_CLEAR,
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
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560Martix_setIntensity = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560MARTIX_SETINTENSITY, // martix display %1 set intensity %2
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
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560Martix_brightnessNumber = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'field_slider',
                        name: 'NUM',
                        value: '0',
                        precision: 1,
                        min: '0',
                        max: '15'
                    }
                ],
                output: 'Number',
                outputShape: Blockly.OUTPUT_SHAPE_ROUND,
                colour: Blockly.Colours.textField,
                colourSecondary: Blockly.Colours.textField,
                colourTertiary: Blockly.Colours.textField
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
