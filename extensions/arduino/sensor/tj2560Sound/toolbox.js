/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TJ2560SOUND_CATEGORY}" id="TJ2560SOUND_CATEGORY" colour="#7700FF" secondaryColour="#4400B3">
    <block type="tj2560Sound_readDigital" id="tj2560Sound_readDigital"></block>
    <block type="tj2560Sound_readAnalog" id="tj2560Sound_readAnalog"></block>
</category>`;
}

exports = addToolbox;
