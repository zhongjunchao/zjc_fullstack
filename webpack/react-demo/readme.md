# 前端三个最重要的知识点

1. es6
2. webpack
  @5.17.0
  npm i -g webpack
  npm i -g webpack-cli  周边生态
3. react

- webpack 处理的入口，  js 文件

- 写代码的时候在 src/index.js 上线的 dist/main.js

- react 初体验
  1. 每个文件都得引入 react
  React 负责提供组件(小程序有内置的组件概念，网页(html/css/js dom),)模板编译功能{{}} {name} 数据绑定...
  ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
  ```

  - index.js entry 引入了test.jsx
    react 语法中JSX语法，用来表示模板
    ```js
    render() {
    return (
      <p>测试一下</p>
    )
    }
    ```
    webpack 处理一切的静态文件，bundler
    .jsx -> .js
    loader 