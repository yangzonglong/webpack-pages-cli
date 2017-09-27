/**
 * 别名配置
 */
const path = require('path');
const glob = require('glob');

const options = {
    cwd: './src/components',
    sync: true
}

// 配置layout.js 别名
let alias =  {
    'Html': path.resolve(__dirname,'../src/unitls/layout.js')
}

// components 文件夹下 所有组件自动配置别名
const globInstance = new glob.Glob('*/?(app-temp|app-js).js', options);
globInstance.found.forEach(item => {
    const key = item.indexOf('temp.js') >= 0 ? 'temp':'js';
    alias[`${item.split("/")[0]}-${key}`] = path.resolve(__dirname,`../src/components/${item}`)
})

module.exports = alias