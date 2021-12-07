/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#A0522D';
    const secondaryColour = '#8B4513';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.tm1640_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1640_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1640_1, 1],
                            [Blockly.Msg.TM1640_2, 2],
                            [Blockly.Msg.TM1640_3, 3],
                            [Blockly.Msg.TM1640_4, 4]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CLK',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIO',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1640_setColorIndex = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1640_SETCOLORINDEX,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1640_1, 1],
                            [Blockly.Msg.TM1640_2, 2],
                            [Blockly.Msg.TM1640_3, 3],
                            [Blockly.Msg.TM1640_4, 4]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            [Blockly.Msg.TM1640_MODE_1, 1],
                            [Blockly.Msg.TM1640_MODE_0, 0]
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1640_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1640_SETBRIGHTNESS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1640_1, 1],
                            [Blockly.Msg.TM1640_2, 2],
                            [Blockly.Msg.TM1640_3, 3],
                            [Blockly.Msg.TM1640_4, 4]
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BRIGHTNESS',
                        options: [
                            [Blockly.Msg.TM1640_1, 1],
                            [Blockly.Msg.TM1640_2, 2],
                            [Blockly.Msg.TM1640_3, 3],
                            [Blockly.Msg.TM1640_4, 4],
                            [Blockly.Msg.TM1640_5, 5],
                            [Blockly.Msg.TM1640_6, 6],
                            [Blockly.Msg.TM1640_7, 7],
                            [Blockly.Msg.TM1640_8, 8],
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tm1640_drawStr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TM1640_SHOWSTR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NUM',
                        options: [
                            [Blockly.Msg.TM1640_1, 1],
                            [Blockly.Msg.TM1640_2, 2],
                            [Blockly.Msg.TM1640_3, 3],
                            [Blockly.Msg.TM1640_4, 4]
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
                        type: 'input_value',
                        name: 'TEXT'
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
