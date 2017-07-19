# webpack-pages-cli
利用webpack实现多静态页面模块化开发。 

## 使用
 #### clone
 ``````
 git clone https://github.com/yangzonglong/webpack-pages-cli
 ``````
 #### 安装依赖
 ``````
 npm install
 ``````
 #### 启动开发模式
 ``````
 npm run dev
 ``````
## 新建页面进行开发
``````
npm run create-page
``````
src/pages下会创建个空的页面模版,文件如下
``````
app-temp.js
app-js.js
html.ejs 
css.scss
``````
- css.scss 页面的css
- html.ejs ejs模版，当页面html过多时，可考虑多个ejs模版，再通过api注入
- app-js.js 页面的静态资源引用入口
- app-temp.js 模版入口，此文件必须存在，否则无法生成html文件

## app-temp.js 基本代码
``````
import Html from 'Html';
import ejs from './html.ejs';
const html = new Html();
export default html.rend(ejs)
``````
Html 是通过webpack别名配置的，其文件是unitls/layout.js

## layout.js 提供的api
#### temp(object) 注入其它模版
temp方法为您注入模版，方便您在ejs模版里自由拼接html。具体参考src/pages/index/app-temp.js
#### data(objext) 注入数据
data方法为您注入数据，方便您在ejs模版里使用数据。具体参考src/pages/index/app-temp.js
#### run(ejs) 指定主ejs模版

## 开发公共组件
``````
npm run create-component
``````
所有公共模块将自动进行别名配置，例如src/components/header 组件，将自动映射成两个别名, header-js和header-temp,当有页面使用组件时，我们只需在页面app-temp.js里引用header-temp，再通过temp方法注入即可，如果该组件有js css, 我们在页面app-js.js 引用 header-js 即可。

注意：执行create-component后，需要手动重启开发模式，才能配置新建的组件别名。

#### 发布
``````
npm run build
``````



## 相关文章
[webpack多页应用架构系列（十三）：构建一个简单的模板布局系统](https://segmentfault.com/a/1190000007159115#articleHeader3)