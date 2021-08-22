/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#7700FF';
    const secondaryColour = '#4400B3';

    /* ---------------- 板载 rgb led ------------------ */
    Blockly.Blocks.arduinoTj2560Ext_setOnBoardRgbLed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_SETONBOARDRGBLED,
                colour: colour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_setPixelColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_SETPIXELCOLOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
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

    Blockly.Blocks.arduinoTj2560Ext_fill = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_FILL,
                args0: [
                    {
                        type: 'input_value',
                        name: 'FIRST'
                    },
                    {
                        type: 'input_value',
                        name: 'COUNT'
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

    Blockly.Blocks.arduinoTj2560Ext_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_COLOR,
                args0: [
                    {
                        type: 'input_value',
                        name: 'R'
                    },
                    {
                        type: 'input_value',
                        name: 'G'
                    },
                    {
                        type: 'input_value',
                        name: 'B'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_setBrightness = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_SETBRIGHTNESS,
                args0: [
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

    Blockly.Blocks.arduinoTj2560Ext_clear = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_CLEAR,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_show = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_SHOW,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* ---------------- 板载蜂鸣器 ------------------ */
    const note = [
        ['C3', 'note_C3'],
        ['C#3', 'note_Db3'],
        ['D3', 'note_D3'],
        ['D#3', 'note_Eb3'],
        ['E3', 'note_E3'],
        ['F3', 'note_F3'],
        ['F#3', 'note_Gb3'],
        ['G3', 'note_G3'],
        ['G#3', 'note_Ab3'],
        ['A3', 'note_A3'],
        ['A#3', 'note_Bb3'],
        ['B3', 'note_B3'],
        ['C4', 'note_C4'],
        ['C#4', 'note_Db4'],
        ['D4', 'note_D4'],
        ['D#4', 'note_Eb4'],
        ['E4', 'note_E4'],
        ['F4', 'note_F4'],
        ['F#4', 'note_Gb4'],
        ['G4', 'note_G4'],
        ['G#4', 'note_Ab4'],
        ['A4', 'note_A4'],
        ['A#4', 'note_Bb4'],
        ['B4', 'note_B4'],
        ['C5', 'note_C5'],
        ['C#5', 'note_Db5'],
        ['D5', 'note_D5'],
        ['D#5', 'note_Eb5'],
        ['E5', 'note_E5'],
        ['F5', 'note_F5'],
        ['F#5', 'note_Gb5'],
        ['G5', 'note_G5'],
        ['G#5', 'note_Ab5'],
        ['A5', 'note_A5'],
        ['A#5', 'note_Bb5'],
        ['B5', 'note_B5']
    ];

    const beatTime = [
        ['1', '1'],
        ['1/2', '0.5'],
        ['1/4', '0.25'],
        ['1/8', '0.125'],
        ['1/16', '0.0625'],
        ['2', '2'],
        ['4', '4']
    ];

    Blockly.Blocks.arduinoTj2560Ext_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_INIT,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_playToneForBeat = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_PLAYTONEFORBEAT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'FREQ',
                        options: note
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: beatTime
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_setTempo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_SETTEMPO,
                args0: [
                    {
                        type: 'input_value',
                        name: 'BPM'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_playRingtone = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_PLAYRINGTONE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: [
                            [Blockly.Msg.ARDUINOTJ2560EXT_CONNECTION, 'R_connection'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_DISCONNECTION, 'R_disconnection'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_DIDI, 'R_buttonPushed'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_MODE1, 'R_mode1'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_MODE2, 'R_mode2'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_MODE3, 'R_mode3'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_SURPRISE, 'R_surprise'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_OHOOH, 'R_OhOoh'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_OHOOH2, 'R_OhOoh2'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_CUDDLY, 'R_cuddly'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_SLEEPING, 'R_sleeping'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_HAPPY, 'R_happy'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_SUPERHAPPY, 'R_superHappy'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_HAPPYSHORT, 'R_happy_short'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_SAD, 'R_sad'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_CONFUSED, 'R_confused'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_FART1, 'R_fart1'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_FART2, 'R_fart2'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_FART3, 'R_fart3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* ---------------- 板载按键 ------------------ */
    Blockly.Blocks.arduinoTj2560Ext_readKey = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_READKEY, // read on board key %1
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'KEY',
                        options: [
                            ['K1', 'A9'],
                            ['K2', 'A6']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    /* ---------------- 板载数码管 ------------------ */
    Blockly.Blocks.arduinoTj2560Ext_displayNumber = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_DISPLAYNUMBER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_ch595_show = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_CH595_SHOW,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TIME'
                    }
                ],
                tooltip: Blockly.Msg.ARDUINOTJ2560EXT_REFRESH_TOOLTIP,
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    /* ---------------- 板载驱动 ------------------ */
    Blockly.Blocks.arduinoTj2560Ext_onBoardDriverRun = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_ONBOARDDRIVERRUN,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['M1', 'M1'],
                            ['M2', 'M2'],
                            ['M3', 'M3'],
                            ['M4', 'M4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.ARDUINOTJ2560EXT_FORWARD, 'L298N_FORWARD'],
                            [Blockly.Msg.ARDUINOTJ2560EXT_BACK, 'L298N_BACKWARD']]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.arduinoTj2560Ext_onBoardDriverStop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.ARDUINOTJ2560EXT_ONBOARDDRIVERSTOP,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['M1', 'M1'],
                            ['M2', 'M2'],
                            ['M3', 'M3'],
                            ['M4', 'M4']
                        ]
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
