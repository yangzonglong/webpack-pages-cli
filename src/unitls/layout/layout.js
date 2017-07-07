import layout from './html.ejs';
import header from './../../components/header/html.ejs';
import footer from './../../components/footer/html.ejs';

// 公共渲染数据
const common = {
    page_title: '未设置页面标题',
    data: {}
}

const moduleExports = {
    init({ PAGE_TITLE, PAGE_STYLE_NAME ,data }){
        common.page_title = PAGE_TITLE;
        common.data = data;
        return this 
    },
    /* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
    run(content) {
        const renderData = {
            header: header(common),
            footer: footer(common),
            content: content(common)
        }
        return layout(renderData)
    }
};

module.exports = moduleExports;