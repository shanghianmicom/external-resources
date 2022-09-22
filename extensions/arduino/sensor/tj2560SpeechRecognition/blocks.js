/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#4CBFE6';
    const secondaryColour = '#2E8EB8';

    Blockly.Blocks.tj2560SpeechRecognition_readData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560SPEECHRECOGNITION_READDATA,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P4', 'P4'],
                            ['P5', 'P5'],
                            ['P6', 'P6']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560SpeechRecognition_isGetSpeech = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560SPEECHRECOGNITION_ISGETSPEECH,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SPEECH',
                        options: [
                            ['开灯/把灯打开/亮灯/打开灯/请开灯', '0x01'],
                            ['关灯/把灯关闭/灭灯/关闭灯/请关灯', '0x02'],
                            ['红色', '0x03'],
                            ['橙色', '0x04'],
                            ['黄色', '0x05'],
                            ['绿色', '0x06'],
                            ['青色', '0x07'],
                            ['蓝色', '0x08'],
                            ['紫色', '0x09'],
                            ['调亮灯光/灯光亮点', '0x0a'],
                            ['调暗灯光/灯光暗点', '0x0b'],
                            ['打开风扇', '0x0c'],
                            ['关闭风扇', '0x0d'],
                            ['打开窗帘', '0x0e'],
                            ['关闭窗帘', '0x0f'],
                            ['可以/同意', '0x10'],
                            ['不可以/不同意', '0x11'],
                            ['显示温度值/温度', '0x12'],
                            ['显示湿度值/湿度', '0x13'],
                            ['确认开始/开始', '0x14'],
                            ['停止执行/结束', '0x15'],
                            ['暂停程序/暂停', '0x16'],
                            ['假的', '0x17'],
                            ['真的', '0x18'],
                            ['打开音乐/播放音乐', '0x19'],
                            ['暂停播放', '0x1a'],
                            ['关掉音乐/停止播放', '0x1b'],
                            ['调大音量/音量加大', '0x1c'],
                            ['调小音量/音量减小', '0x1d'],
                            ['再听一次', '0x1f'],
                            ['再读一次', '0x20'],
                            ['网络情况', '0x21'],
                            ['断开连接', '0x22'],
                            ['连接网络', '0x23'],
                            ['掷骰子', '0x24'],
                            ['向前走/前进', '0x25'],
                            ['往后退/后退', '0x26'],
                            ['向左转/左转', '0x27'],
                            ['向右转/右转', '0x28'],
                            ['左平移/向左平移', '0x29'],
                            ['右平移/向右平移', '0x2a'],
                            ['向前翻', '0x2b'],
                            ['向后翻', '0x2c'],
                            ['向左翻/左侧翻', '0x2d'],
                            ['向右翻/右侧翻', '0x2e'],
                            ['向前跑/跑步前进', '0x2f'],
                            ['向后跑/跑步后退', '0x30'],
                            ['向前爬', '0x31'],
                            ['向后爬', '0x32'],
                            ['向左爬', '0x33'],
                            ['向右爬', '0x34'],
                            ['左脚上台阶', '0x35'],
                            ['右脚上台阶', '0x36'],
                            ['左脚下台阶', '0x37'],
                            ['右脚下台阶', '0x38'],
                            ['前起身', '0x39'],
                            ['后起身', '0x3a'],
                            ['跳个舞蹈', '0x3b'],
                            ['自我介绍', '0x3c'],
                            ['蹲下', '0x3d'],
                            ['起立', '0x3e'],
                            ['趴下', '0x3f'],
                            ['倒立', '0x40'],
                            ['飞翔姿势', '0x41'],
                            ['战斗姿势', '0x42'],
                            ['单脚站立姿势', '0x43'],
                            ['踢球姿势', '0x44'],
                            ['欢迎姿势', '0x45'],
                            ['复古舞蹈姿势', '0x46'],
                            ['步行姿势', '0x47'],
                            ['抱歉姿势', '0x48'],
                            ['加速', '0x49'],
                            ['减速', '0x4a'],
                            ['打开图片', '0x4b'],
                            ['关闭图片', '0x4c'],
                            ['打开视频', '0x4d'],
                            ['关闭视频', '0x4e'],
                            ['寻找火源', '0x4f'],
                            ['开启人体测温功能', '0x50'],
                            ['关闭人体测温功能', '0x51'],
                            ['开启烟雾检测功能', '0x52'],
                            ['关闭烟雾检测功能', '0x53']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
