/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_ARDUINOTJ2560EXT_CATEGORY}" id="ARDUINOTJ2560EXT_CATEGORY" colour="#00D7B0" secondaryColour="#00D7B0">
    <block type="arduinoTj2560Ext_setPixelColor" id="arduinoTj2560Ext_setPixelColor">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="arduinoTj2560Ext_fill" id="arduinoTj2560Ext_fill">
        <value name="FIRST">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="arduinoTj2560Ext_color" id="arduinoTj2560Ext_color">
        <value name="R">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="arduinoTj2560Ext_setBrightness" id="arduinoTj2560Ext_setBrightness">
        <value name="BRT">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="arduinoTj2560Ext_clear" id="arduinoTj2560Ext_clear">
    </block>
    <block type="arduinoTj2560Ext_show" id="arduinoTj2560Ext_show">
    </block>
    <sep gap="36"/>
     <block type="arduinoTj2560Ext_displayNumber" id="arduinoTj2560Ext_displayNumber">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
        <value name="DECIMAL">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="arduinoTj2560Ext_show" id="arduinoTj2560Ext_show">
        <value name="TIME">
            <shadow type="math_integer">
                <field name="NUM">1000</field>
            </shadow>
        </value>
    </block>
    <sep gap="36"/>
    <block type="arduinoTj2560Ext_playToneForBeat" id="arduinoTj2560Ext_playToneForBeat">
        <field name="FREQ">note_C4</field>
    </block>
    <block type="arduinoTj2560Ext_setTempo" id="arduinoTj2560Ext_setTempo">
        <value name="BPM">
            <shadow type="math_whole_number">
                <field name="NUM">120</field>
            </shadow>
        </value>
    </block>
    <block type="arduinoTj2560Ext_playRingtone" id="arduinoTj2560Ext_playRingtone">
    </block>
    <sep gap="36"/>
    <block type="arduinoTj2560Ext_onBoardDriverRun" id="arduinoTj2560Ext_onBoardDriverRun">
        <value name="SPEED">
            <shadow type="math_int9_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="arduinoTj2560Ext_onBoardDriverStop" id="arduinoTj2560Ext_onBoardDriverStop">
    </block>
    <sep gap="36"/>` +

    // `<block type="arduinoTj2560Ext_displayNumber" id="arduinoTj2560Ext_displayNumber">
    //     <value name="NUM">
    //         <shadow type="math_number">
    //             <field name="NUM">0</field>
    //         </shadow>
    //     </value>
    // </block>
    // <block type="arduinoTj2560Ext_ch595_show" id="arduinoTj2560Ext_ch595_show">
    //     <value name="TIME">
    //         <shadow type="math_integer">
    //             <field name="NUM">10</field>
    //         </shadow>
    //     </value>
    // </block>
    // <sep gap="36"/>` +

    `<block type="arduinoTj2560Ext_readKey" id="arduinoTj2560Ext_readKey">
    </block>
</category>
`;
}

exports = addToolbox;
