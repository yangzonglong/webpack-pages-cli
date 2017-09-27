/**
 * 输出pages下所有页面名
 */
const glob = require('glob');
let pages = [];
const options = {
    cwd: './src/pages',
    sync: true,
}
const globInstance = new glob.Glob('*/app-temp.js', options);
globInstance.found.forEach(item => {
    pages.push(item.split('/app-temp.js')[0])
})
module.exports = pages