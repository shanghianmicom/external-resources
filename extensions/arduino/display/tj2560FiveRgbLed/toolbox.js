/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560FIVERGBLED_CATEGORY}" id="TJ2560FIVERGBLED_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560FiveRgbLed_setPixelColor" id="tj2560FiveRgbLed_setPixelColor">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="tj2560FiveRgbLed_fill" id="tj2560FiveRgbLed_fill">
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
    <block type="tj2560FiveRgbLed_setBrightness" id="tj2560FiveRgbLed_setBrightness">
        <value name="BRT">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="tj2560FiveRgbLed_clear" id="tj2560FiveRgbLed_clear">
    </block>
</category>`;
}

exports = addToolbox;
