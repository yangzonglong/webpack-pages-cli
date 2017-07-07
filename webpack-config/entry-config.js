const glob = require('glob');
const pagesArr = require('./pages-config');
let pages = {};

pagesArr.forEach(item=>{
    pages[`static/${item}/`] = `./src/pages/${item}/app-js.js`
})

module.exports = pages