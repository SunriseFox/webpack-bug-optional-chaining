const presets = [];

const plugins = [];

presets.push([
    '@babel/preset-env',
    {
        targets: 'last 1 version and chrome > 0',
    },
]);

module.exports = { presets, plugins };
