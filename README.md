# traffic police h5

## 安装依赖包
```
npm install
```

### 启动开发运行环境
```
npm run serve
```
或者使用 vue ui 来通过图形化的方式查看项目信息和运行项目（推荐）
```
vue ui
```

### 启动mock模拟数据服务器

进入mock-server文件夹，安装依赖后，启动即可(npm run dev)。可以按需求来编写自己的模拟数据，在mock文件夹里面。


### 构建用于发布的代码
```
npm run build
```

### 自定义配置
请查看文档： [配置文档](https://cli.vuejs.org/config/).

### 开发说明
##### 项目代码概述
项目使用vue作为基础，搭配vant组件库进行开发。
##### 代码格式
请务必使用具有eslint插件的编辑器，并且能使用自动格式化命令。强烈推荐 [Visual Studio Code](https://code.visualstudio.com/) ！
##### 布局样式
采用px转rem的方案。写css样式的时候，参考设计稿中的尺寸，设计稿的宽度为750，设计稿中元素的尺寸可直接套用到css中的px，工具会自动转换成rem。也可直接在css中使用rem，10rem即等于屏幕的宽度。

