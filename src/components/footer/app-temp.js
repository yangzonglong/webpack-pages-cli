import ejs from './html.ejs';
const pageData = {
    tip: '我是底部默认数据哦'
}
const bridge = datas => {
    return ejs(Object.assign(datas,pageData))
}
export default bridge