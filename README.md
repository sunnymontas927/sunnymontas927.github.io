# Shijun Cheng 个人学术主页

纯静态网站，不需要安装任何软件，也没有构建步骤。把这些文件放到 GitHub 仓库里就能上线。

## 文件说明

```
index.html            首页
publications.html     论文列表页
data/news.js          首页的 News 内容（最常改的文件）
data/publications.js  全部期刊和会议论文
css/style.css         样式
js/site.js            把 data 里的内容显示到页面上，一般不用动
assets/img/           照片和论文配图
assets/Shijun_Cheng_CV.pdf   简历
```

## 第一次上线（GitHub Pages）

1. 登录 GitHub，点右上角 **+** → **New repository**。
2. Repository name 必须填 `sunnymontas927.github.io`，选 **Public**，点 **Create repository**。
3. 在新仓库页面点 **uploading an existing file**，把本文件夹里的所有文件和子文件夹一起拖进去（注意是文件夹里面的内容，不是文件夹本身），点 **Commit changes**。
4. 等一两分钟，打开 https://sunnymontas927.github.io 就能看到网站。

如果打不开，到仓库的 **Settings → Pages** 里确认 Source 是 `Deploy from a branch`，Branch 是 `main` 和 `/ (root)`。

## 日常更新

所有修改都可以直接在 GitHub 网页上完成：打开文件，点右上角的铅笔图标，改完点 **Commit changes**，一两分钟后生效。

### 加一条 News

打开 `data/news.js`，在列表最上面加一行：

```js
{ date: "Dec 2026", text: "Our paper on ... was accepted by Geophysics." },
```

### 加一篇论文

打开 `data/publications.js`，在 `window.JOURNALS`（期刊）或 `window.CONFERENCES`（会议）列表的最上面加一条。文件开头有每个字段的说明，最简单的写法是：

```js
{ y: 2027, a: [SC, TA], t: "论文标题", v: GEO },
```

作者可以用文件开头定义好的缩写（如 `SC`、`TA`），也可以直接写 `"Jane Doe"`。你的名字会自动加粗。论文页顶部的篇数会自动更新。

### 换首页的代表论文

打开 `index.html`，搜索 `SELECTED WORK`，下面每个 `<article>` 是一张卡片，改里面的图片路径、标题、作者和链接即可。新图片放到 `assets/img/`。

### 换照片或简历

用同名文件覆盖 `assets/img/shijun-cheng.jpg` 或 `assets/Shijun_Cheng_CV.pdf`。照片建议用 4:5 的竖版。

## 以后想用自己的域名

买好域名后，在仓库 **Settings → Pages → Custom domain** 里填入域名，然后按 GitHub 的提示在域名服务商那里加 DNS 记录。网站文件不用改。

## 本地预览

直接双击 `index.html` 用浏览器打开即可。
