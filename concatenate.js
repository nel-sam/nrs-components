// Required for elements: This script is required to get all component files into a single file

const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        //'./dist/nrs-components/runtime-es5.js',
        './dist/nrs-components/runtime-es2015.js',
        //'./dist/nrs-components/polyfills-es5.js',
        './dist/nrs-components/polyfills-es2015.js',
        './dist/nrs-components/scripts.js',
        //'./dist/nrs-components/main-es5.js',
        './dist/nrs-components/main-es2015.js',
    ]

    await fs.emptyDir('elements')
    await fs.ensureDir('elements')
    await concat(files, 'elements/nrs-contact-card.js');
    //await fs.copyFile('./dist/nrs-components/styles.css', 'elements/styles.css')
    await fs.copy('./dist/nrs-components/assets/', 'elements/assets/')
})()