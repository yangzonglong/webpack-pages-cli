const glob = require('glob');
let pages = [];
const options = {
    cwd: './src/pages',
    sync: true,
}
const globInstance = new glob.Glob('!(_)*/!(_)*', options);
globInstance.found.forEach(item => {
    if(item.indexOf('app-temp.js') >= 0){
        pages.push(item.split('/app-temp.js')[0])
    }
})
module.exports = pages