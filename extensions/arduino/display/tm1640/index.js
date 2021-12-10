const tm1640 = formatMessage => ({
    name: formatMessage({
        id: 'tm1640.name',
        default: '8x16 LED Matrix'
    }),
    extensionId: 'tm1640',
    version: '1.0.0',
    supportDevice: ['unoCore', 'arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'MetaCodeLab Team',
    iconURL: `asset/tm1640.png`,
    description: formatMessage({
        id: 'tm1640.description',
        default: 'LED Matrix module based on Tm1640.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: ''
});

module.exports = tm1640;