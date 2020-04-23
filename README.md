# H5 数据可视化

纳博特数据可视化项目

## 软件架构

### 当前已应用

NodeJs，React，Echarts,Electron

## 使用

设计分辨率：fullscreen

1. 下载 NodeJs，下载地址[Nodejs](http://nodejs.cn/)，最新稳定版本即可；
2. 推荐使用 IDE：VSCode，下载地址[Visual Studio Code](https://code.visualstudio.com/)，原因：免费，轻量级，丰富扩展。

打开项目方法：

1. 安装 NodeJs、VSCode；
2. git 下载`git clone https://github.com/MintOTea/ReactDataVisualization.git`使用 ssh 方式需在码云加入自己的公钥。
3. 进入项目主目录；
4. 右键，选择 Visual Studio Code 打开。

### 安装教程

#### 推荐 yarn

推荐使用 yarn 来安装依赖！

1. 全局安装 yarn`npm install yarn@latest -g`
2. 安装依赖`yarn`

#### 使用 npm

1. 在主目录内通过终端执行`npm install`来安装所需依赖；
2. 执行`npm start`或`npm run start`，在 localhost:3000 即可预览；
3. 执行`npm build`或`npm run build`，编译程序。

### 脚本

- `start`启动调试服务器，并打开项目
- `build`打包 H5 项目网站到 build 目录
- `ele-build-pc-x86`编译 32 位版本的 PC 版程序
- `ele-build-pc-x64`编译 64 位版本的 PC 版程序
- `ele-build-linux-x86`编译 32 位版本的 Linux 版程序
- `ele-build-linux-ARM64`编译 ARM64 位版本的 Linux 版程序
- `test`测试

### VSCode 直接执行

在 VSCode 左侧的自带脚本中，直接点击对应的箭头即可直接运行。

## 目录说明

| 文件/目录          | 注释                                        |
| ------------------ | ------------------------------------------- |
| package.json       | 依赖目录，不需手动修改，yarn add 时自动添加 |
| src                | 资源主目录                                  |
| src/index.js       | 用来加载组件到 public/index.html 的 root 内 |
| src/App.js         | 主页面                                      |
| src/component/     | 图表组件目录，已封装好，仅需引用            |
| public             | 网页目录，没有必要无需修改                  |
| public/index.html  | 仅用来加载，没有必要修改                    |
| public/favicon.ico | 图标                                        |

## 使用说明

以加入一个 Echarts 的 Line（线图）为例：

1. 在 App.js 中引入 Line 组件`import {Line} from "component"`
2. data 目录下新建一个.js 文件如 example.js，用来保存 Echarts 组件的选项，并用 export 导出`export const example={xxx}`
3. 在 App.js 中引入导出的选项`import {example} from "data/example"`
4. 在 App.js 的`<div>`标签中插入 Line 组件，并引用导出的选项`<Line data={example}/>`

运行即可。
