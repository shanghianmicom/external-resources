/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560DOUBLELINETRACKER_CATEGORY: 'Double Line Tracker',
        TJ2560DOUBLELINETRACKER_READ: 'read %1 double line tracker %2',
        TJ2560DOUBLELINETRACKER_LEFT: 'left',
        TJ2560DOUBLELINETRACKER_RIGHT: 'right'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560DOUBLELINETRACKER_CATEGORY: '双路循迹',
        TJ2560DOUBLELINETRACKER_READ: '读取 %1 双路循迹 %2',
        TJ2560DOUBLELINETRACKER_LEFT: '左侧',
        TJ2560DOUBLELINETRACKER_RIGHT: '右侧'
    });
    return Blockly;
}

exports = addMsg;
