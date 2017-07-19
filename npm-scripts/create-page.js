const fs = require('fs');
const path = require('path');
const srcpath = path.resolve(__dirname,'../src/pages/--demo--');
fs.mkdirSync(srcpath);
// 生成ejs模版
fs.writeFile(`${srcpath}/html.ejs`,'<div>生成成功！</div>',function(err){
    if(err){
        console.log('ejs模版=err');
    }else{
        console.log('ejs模版=ok');
    }
})
// 生成app-temp.js
fs.writeFile(`${srcpath}/app-temp.js`,
    "import Html from 'Html';import ejs from './html.ejs';const html = new Html();export default html.rend(ejs)",
    function(err){
    if(err){
        console.log('app-temp.js=err');
    }else{
        console.log('app-temp.js=ok');
    }
})
// 生成scss文件
fs.writeFile(`${srcpath}/css.scss`,'',function(err){
    if(err){
        console.log('css.scss=err');
    }else{
        console.log('css.scss=ok');
    }
})
// 生成app-js.js
fs.writeFile(`${srcpath}/app-js.js`,"import css from './css.scss';",function(err){
    if(err){
        console.log('app-js.js=err');
    }else{
        console.log('app-js.js=ok');
    }
})