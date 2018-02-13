---
id: guide_installation
title: 安装指南
sidebar_label: 安装指南
---

<AUTOGENERATED_TABLE_OF_CONTENTS>

### 用脚本安装

安装Dochameleon最简单的方式，运用脚本`dochameleon-init`

首先安装脚本

```
npm install --global dochameleon-init
```

然后，进入想要创建文档网站的文件夹，运行

```
dochameleon-init
cd website
npm run start
```

脚本完成三件任务
* 创建`website`文件夹
* npm安装`dochameleon`包
* 拷贝样板网站


### 手工安装

如果你不想使用脚本，更愿意手工创建网站
- 创建并进入`website`文件夹
- 编写package.json，内容如下,

```
{
  "scripts": {
    "examples": "dochameleon-examples"
  }
}
```
- 安装Dochameleon, 运行
```
npm install dochameleon
```

- 初始化基本样板, 运行
```
npm run examples
```

### 运行本地开发服务器

安装完成之后，一个样板网站已经可以使用了。运行

```
npm run start
```

### 文件结构

安装成功之后，`website`下文件结构是这样的，

```bash
website/
├── blog/
│   ├── 2018-01-08-why-dochameleon.md
│   └── 2018-01-10-staging-step.md
├── components/
├── docs/
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── sidebars.json
├── pages/
│   ├── help.js
│   ├── index.js
│   └── users.js
├── siteConfig.js
├── static/
└── theme/
```