/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560THREELINETRACKER_CATEGORY: 'Double Line Tracker',
        TJ2560THREELINETRACKER_READ: 'read %1 double line tracker %2',
        TJ2560THREELINETRACKER_LEFT: 'left',
        TJ2560THREELINETRACKER_MIDDLE: 'middle',
        TJ2560THREELINETRACKER_RIGHT: 'right'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560THREELINETRACKER_CATEGORY: '三路循迹',
        TJ2560THREELINETRACKER_READ: '读取 %1 三路循迹 %2',
        TJ2560THREELINETRACKER_LEFT: '左侧',
        TJ2560THREELINETRACKER_MIDDLE: '中间',
        TJ2560THREELINETRACKER_RIGHT: '右侧'
    });
    return Blockly;
}

exports = addMsg;
