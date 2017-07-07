# webpack-pages-cli
基于webpack的传统多页面开发脚手架。前端迅速发展，各种工具层出不穷，webpack无疑是一颗耀眼的星星，其丰富的插件，高可扩展性，模块热更新都丰富了我们的开发时间！
## 传统多页面开发模式
先写一个页面的html，再复制这个html修改成其它页面的，如果有公共部份的html要修改，就要手动修改全部页面。这样无疑增加了开发时间，工作效率也低。
## 多页面开发进阶模式
使用js模版，例如：ejs，jade，art-template（等等）... 可提取出公共部份html，实现html模块化，使用js模版的好处有很多。
## 用webpack搭配ejs 实现高度模块化
### 文件目录架构
- node_modules //npm模块
- src  // 开发源文件
    - components
    - pages
    - unitls
- webpack-config // webpack配置抽离
- package.json
- webpack-config.js // webpack配置文件

### src是开发源文件夹
- components // 存放html组件,如头部底部侧边栏
- pages //所有的页面放在这里
    - index // 首页,页面必须包含以下两个文件
        - app-js.js // js入口
        - app-temp.js // 模版入口
- unilts // 所有元件，unilts和components的区别在于：components存放的组件包括html与js，unilts只存放功能性js模块

### html-webpack-plugin
 html-webpack-plugin处理ejs模版，用于输出最终的html页面

 ### 下载运行
 #### clone
 ``````
 git clone https://github.com/yangzonglong/webpack-pages-cli
 ``````
 #### 安装依赖
 ``````
 npm install
 ``````
 #### 运行开发模式
 ``````
 npm run dev
 ``````
#### 打包发布
``````
npm run build
``````
会打包到项目根目录 build 目录下

### 参考文章
[webpack多页应用架构系列（十三）：构建一个简单的模板布局系统](https://segmentfault.com/a/1190000007159115#articleHeader3)