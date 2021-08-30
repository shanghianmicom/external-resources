/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560LASERRANGING_CATEGORY: 'Laser Ranging',
        TJ2560LASERRANGING_READ: 'Laser ranging module read distance'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560LASERRANGING_CATEGORY: '激光测距模块',
        TJ2560LASERRANGING_READ: '激光测距模块读取距离(mm)'
    });
    return Blockly;
}

exports = addMsg;
