/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560WATERLEVEL_CATEGORY}" id="TJ2560WATERLEVEL_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560WaterLevel_read" id="tj2560WaterLevel_read"></block>
</category>`;
}

exports = addToolbox;
