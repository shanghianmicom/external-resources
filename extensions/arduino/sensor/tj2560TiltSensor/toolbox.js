/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560TILTSENSOR_CATEGORY}" id="TJ2560TILTSENSOR_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560TiltSensor_read" id="tj2560TiltSensor_read"></block>
</category>`;
}

exports = addToolbox;
