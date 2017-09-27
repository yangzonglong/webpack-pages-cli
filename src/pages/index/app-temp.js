// 模版入口 在这里组织模版
// 这个文件必须存在,不然无法生成html页面

import Html from 'Html'
import header from 'header-temp'
import footer from 'footer-temp'
import ejs from './index.ejs'

const html = new Html()
html.temp({header,footer})
html.data({title:'title'})
export default html.rend(ejs)
