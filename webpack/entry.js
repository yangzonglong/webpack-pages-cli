/**
 * 入口
 */
const glob = require('glob');
const pagesArr = require('./pages');
let pages = {};
pagesArr.forEach(item=>{
    pages[`static-${process.env.npm_package_version}/${item}/`] = `./src/pages/${item}/app-js.js`
})

module.exports = pages