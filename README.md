生命周期

this.$set(this.obj,age,20) 3个参数
this.$delete(this.obj,age)

computed
watch



信贷系统接口文档

前端打包
- npm run build
 -- package.json
 -- 发布线上不便于调试
- 打包发布到测试环境
 -- 增加打包命令 开发 测试 线上
 npm run build:dev --开发调试
 npm run build:prod --线上


打包后的代码如何运行
- 不能双击dist/index.html
- 放到htt容器运行 serve tomcat nginx iis
- npm i -g serve
- 启动打包后的项目 serve dist 访问http://localhost:5000


打包指定不同的环境
- npm run build:prod跟npm run build的区别是不是有没有压缩的区别
添加环境变量
- 开发 在根目录添加.env.dev dev的名称与package.json中的mode对应
- 上线 在根目录添加.dev.prod
- 在需要动态指定变量的位置使用(process.env.NODE_ENV)


打包压缩，大文件处理
- npm run dev 
- npm run build 
- 少了哪些文件 注释，空行，混淆，压缩
- app.js 还是很大
- 代码细分：三方vue，axios,第三方UI，开发代码...
- 把三方的代码移除，使用三方提供的cdn资源（免费，收费）
- 找到cdn资源，添加到public/index.html，把代码中的from vue.use
    import vue from 'vue'
    vue.use(antd)
在vue.config.js配置排除三方包
-通过减少三方包vue 打包后的js 大小更小


gzip压缩
- npm i compression-webpack-plugin
- 配置vue.config.js
- 打包会生成以gz结尾的文件
- 如何查看浏览器是否使用gzip
    - 浏览器控制台点开相关js文件
    - 请求头 Accept-Encoding:gzip.defaule,br
    响应头：Content-Encoding：gzip
    性能最大化



打包模式部署
-hash 打包后dist直接使用http容器 本地及线上相同
    路由中有#
    可以刷新页面
- history 打包后通过容器运行刷新会有404出现
    路由中没有#
    不可以刷新页面
    解决：需要前端和后端一起部署，有后端负责跳转到前端
    可以在手脚架刷新



## node
- 为什么要使用node，因为他是js
- js运行时环境
- 主要使用express,快速生成框架




this的指向
谁调用this就指向谁
function test() {
    console.log(this)
}
test() // 指向window


严格模式下 this指向undefined
function test() {
    "use strict"
    console.log(this) // undefined
}
test()


构造函数的this指向的是新创建的对象，而不是构造函数本身
function test(name,age){
    this.name = name
    this.age = age
    this.action = function(){
        console.log(this)
    }
}

var p1 = new test(a,2)
p1.action() // this指向的是test

对象实例
var obj = {}
obj.name = abcd
obj.age = 22
obj.action = function() {
    console.log(this)
}

function h2(){
    console.log(this)
}

obj.action() // this = obj
obj.ss = h2
obj.h2() // this = obj

闭包
一个函数+一个函数引用外部局部变量
function text() {
    var a = 1;
    return function(){
        a++
    }
}
text()
闭包的作用
对象封装 将数据缓存起来，避免污染
缺点
不易理解，占用内存
优点
可以缓存数据，避免污染，柯里化，很灵活

var person = function(){
    var name = '张三'
    return {
        getName(){
            return name
        },
        setName(newName){
            name = newName
        }
    }
}

person()


软件开发设计流程
需求---分析---设计---编码---测试---部署---运维



登录，首页，
菜单管理，机构管理，用户管理，版本管理，资源管理，
消息管理，字典管理，任务管理，阶段管理，组管理，
项目管理，支付渠道管理，





