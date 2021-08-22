/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560BUMPSWITCH_CATEGORY}" id="TJ2560BUMPSWITCH_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560BumpSwitch_read" id="tj2560BumpSwitch_read"></block>
</category>`;
}

exports = addToolbox;
