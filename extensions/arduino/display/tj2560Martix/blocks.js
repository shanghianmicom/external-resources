/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#06603e';
    const secondaryColour = '#06603e';

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_drawPixel = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWPIXEL,
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
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED, 'HIGH'],
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK, 'LOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_drawLine = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWLINE,
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
                        name: 'X0'
                    },
                    {
                        type: 'input_value',
                        name: 'Y0'
                    },
                    {
                        type: 'input_value',
                        name: 'X1'
                    },
                    {
                        type: 'input_value',
                        name: 'Y1'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED, 'HIGH'],
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK, 'LOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_showChar = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWCHAR,
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
                        name: 'TEXT'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED, 'HIGH'],
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK, 'LOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_showNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWNUMBER,
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
                        name: 'NUMBER'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED, 'HIGH'],
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK, 'LOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_fill = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_FILL,
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
                        name: 'COLOUR',
                        options: [
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED, 'HIGH'],
                            [Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK, 'LOW']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_SETBRIGHTNESS, // 8x8 martix display set brightness %1
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
                        name: 'BRT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_brightnessNumber = {
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

    Blockly.Blocks.eitghtTimesEightMatirxDisplay_refresh = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.EITGHTTIMESEIGHTMATIRXDISPLAY_REFRESH,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
