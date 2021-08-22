/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560DOUBLETOUCHBUTTON_CATEGORY: 'Double Touch Button',
        TJ2560DOUBLETOUCHBUTTON_READ: 'read %1 double touch button %2',
        TJ2560FOURBUTTON_LEFT: 'left',
        TJ2560FOURBUTTON_RIGHT: 'right'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560DOUBLETOUCHBUTTON_CATEGORY: '双触摸按键',
        TJ2560DOUBLETOUCHBUTTON_READ: '读取 %1 双触摸按键 %2',
        TJ2560FOURBUTTON_LEFT: '左侧',
        TJ2560FOURBUTTON_RIGHT: '右侧'
    });
    return Blockly;
}

exports = addMsg;
