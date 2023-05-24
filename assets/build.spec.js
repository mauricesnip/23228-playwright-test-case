const fs = require('node:fs');
const { test, expect } = require('@playwright/test');

test.describe('Webpack', () => {
    const PUBLIC_PATH = `${process.cwd()}/public`;
    const MANIFEST = require(`${PUBLIC_PATH}/build/app/manifest.json`);

    // CSS
    test('builds CSS correctly', () => {
        expect(fs.readFileSync(`${PUBLIC_PATH}${MANIFEST['build/app/app.css']}`, 'utf-8')).toMatchSnapshot();
    });
});
