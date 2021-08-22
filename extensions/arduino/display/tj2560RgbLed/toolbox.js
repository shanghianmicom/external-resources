/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560RGBLED_CATEGORY}" id="TJ2560RGBLED_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560RgbLed_setPixelColor" id="tj2560RgbLed_setPixelColor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
