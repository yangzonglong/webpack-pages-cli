const glob = require('glob');
const pagesArr = require('./pages-config');
let pages = {};
pagesArr.forEach(item=>{
    pages[`static-${process.env.npm_package_version}/${item}/`] = `./src/pages/${item}/app-js.js`
})

module.exports = pages