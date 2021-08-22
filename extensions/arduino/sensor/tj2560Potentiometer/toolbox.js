/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560POTENTIOMETER_CATEGORY}" id="TJ2560POTENTIOMETER_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560Potentiometer_read" id="tj2560Potentiometer_read"></block>
</category>`;
}

exports = addToolbox;
