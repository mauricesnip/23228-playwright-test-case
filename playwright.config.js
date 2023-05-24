const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    preserveOutput: 'failures-only',
    snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}/{arg}{ext}',
    testDir: './assets',
    use: {
        viewport: {
            width: 1440,
            height: 900,
        },
    },
});
