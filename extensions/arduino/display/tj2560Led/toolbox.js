/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560LED_CATEGORY}" id="TJ2560LED_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560Led_set" id="tj2560Led_set"></block>
</category>`;
}

exports = addToolbox;
