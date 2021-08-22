/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560SMOKECONCENTRATION_CATEGORY}" id="TJ2560SMOKECONCENTRATION_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560SmokeConcentration_readDigital" id="tj2560SmokeConcentration_readDigital"></block>
    <block type="tj2560SmokeConcentration_readAnalog" id="tj2560SmokeConcentration_readAnalog"></block>
</category>`;
}

exports = addToolbox;
