import layout from './../../unitls/layout/layout';
import ejs from './temp/index.ejs';

const PAGE_TITLE = '678'

export default layout.init({
    PAGE_TITLE,
    data:{ name: '这是测试title' }
}
).run(ejs)