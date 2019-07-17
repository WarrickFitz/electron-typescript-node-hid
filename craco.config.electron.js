module.exports = {
    webpack: {
        mode: "extends",
        configure: {
            target: 'electron-renderer',
            externals: {
                "node-hid": 'commonjs node-hid'
            }
        }
    }
};
