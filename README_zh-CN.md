<div align="center">

# 🎮 FiveM 画质包安装指南

**让你的 GTA V 画面进化到「照片级」· 中英双语 · 萌新友好**

[![English Version](https://img.shields.io/badge/Language-English-ff4d6d)](README.md)

![语言](https://img.shields.io/badge/%E8%AF%AD%E8%A8%80--%E4%B8%AD%E8%8B%B1%E5%8F%8C%E8%AF%AD-ff4d6d)
![平台](https://img.shields.io/badge/%E5%B9%B3%E5%8F%B0-Windows-9b6dff)
![难度](https://img.shields.io/badge/%E9%9A%BE%E5%BA%A6--%E6%96%B0%E6%89%8B%E5%8F%8B%E5%A5%BD-4ade80)
![步骤](https://img.shields.io/badge/%E6%AD%A5%E9%AA%A4-5%E6%AD%A5%E6%90%9E%E5%AE%9A-ff4d6d)
![方式](https://img.shields.io/badge/%E6%95%99%E7%A8%8B--%E5%9B%BE%E6%96%87%2B%E8%A7%86%E9%A2%91-f59e0b)
[![License](https://img.shields.io/badge/License-MIT-9b6dff)](LICENSE)

> 🚀 从零开始,手把手带你装好画质包 —— **不懂电脑也能成功!**

</div>

---

## 📚 目录

| 章节 | 说明 |
| --- | --- |
| [💡 这是什么?](#-这是什么) | 一分钟了解画质包 |
| [✅ 准备工作](#-准备工作) | 开始前要准备什么 |
| [📦 步骤 1 · 安装 FiveM](#-步骤-1--安装-fivem) | 打好地基 |
| [⬇️ 步骤 2 · 下载画质包](#-步骤-2--下载画质包) | 挑选你的画质包 |
| [📂 步骤 3 · 复制文件](#-步骤-3--复制文件) | 最关键的一步 |
| [🎨 步骤 4 · 安装 ReShade](#-步骤-4--安装-reshade) | 电影级滤镜引擎 |
| [▶️ 步骤 5 · 游戏内启用](#-步骤-5--游戏内启用) | 见证奇迹时刻 |
| [🗂️ 文件放置总结](#-文件放置总结) | 一张表搞定所有疑问 |
| [❓ 常见问题 FAQ](#-常见问题-faq) | 踩坑自救指南 |

---

## 💡 这是什么?

**FiveM** 是 GTA V 的大型多人联机模组平台,玩法更丰富、自由度高。
而**画质包**(Graphics Pack)就像给游戏换上一副"高端眼镜":

- 🏙️ **NVE (NaturalVision Evolved)** —— 公认最真实的画质,照片级画面
- 🎬 **QuantV** —— 电影感色调,风格化拉满
- 🌈 **ReShade 预设** —— 免费的画面滤镜,新手入门首选
- ☀️ **ENB (ENBSeries)** —— 单机模式画面增强神器

> 💡 **一句话总结:** 本教程帮你把画质包 + ReShade 装进 FiveM,游戏画面焕然一新!

---

## ✅ 准备工作

| 需求 | 说明 |
| --- | --- |
| 🎮 **正版 GTA V** | Steam / Epic / Rockstar 平台均可 |
| 🖥️ **显卡** | 建议 GTX 1060 及以上(低于此配置可能卡顿) |
| 💾 **磁盘空间** | 至少 30GB 空闲空间 |
| 🌐 **网络** | 稳定网络(下载画质包和游戏文件用) |

<div align="center">
<img src="https://img.shields.io/badge/%E2%9C%94%EF%B8%8F--%E5%85%A8%E9%83%A8%E5%B0%B1%E7%BB%AA-4ade80" alt="Ready"/>
</div>

---

## 📦 步骤 1 · 安装 FiveM

> 🎯 **目标:** 桌面出现 FiveM 图标,能正常进入服务器。

1. 打开官网 [`https://fivem.net`](https://fivem.net),点击 **Download** 下载安装器。
2. 运行 `FiveM.exe`,安装器会自动检测 GTA V 路径;找不到就手动选择 GTA 5 文件夹。
3. 等待安装完成(首次会下载一些必需文件)。
4. 启动 FiveM,登录 Rockstar 账号,随便进一个服务器测试。

✅ **完成标志:** 桌面出现 FiveM 图标,可正常进服游玩。

> ⚠️ **注意:** 安装完成后即可退出游戏,进入下一步。

---

## ⬇️ 步骤 2 · 下载画质包

> 🎯 **目标:** 拿到一个**完整解压后**的画质包文件夹。

| 画质包 | 特点 | 获取方式 |
| --- | --- | --- |
| 🏙️ **NVE** | 最真实、照片级画面 | Patreon 付费支持作者(有 FiveM 专用版) |
| 🎬 **QuantV** | 电影感色调、风格化 | 官网购买 |
| 🌈 **ReShade 预设** | 免费、效果明显 | GitHub 大量免费预设 |
| ☀️ **ENB** | 单机画面增强 | [`enbdev.com`](https://enbdev.com/news.html) 免费下载 |

> ⚠️ **关键提醒:** 下载后通常得到 **zip 压缩包**,请**完整解压**!
> 千万别直接双击 zip 里的文件使用。

---

## 📂 步骤 3 · 复制文件

> 🎯 **目标:** 画质包文件成功进入 FiveM 目录。
> ⚠️ 这是**最关键**的一步,细心操作!

1. 按 `Win + R`,输入 `%localappdata%` 并回车。
2. 进入 `FiveM → FiveM.app` 文件夹。
3. 把解压后的**画质包文件**复制到 `FiveM.app\data` 文件夹(提示合并/覆盖选"是")。
4. (可选)删除 `caches` 缓存文件夹,让游戏重新生成,避免冲突。
5. 有些画质包(如 NVE)要求放 `FiveM.app` **根目录**,以画质包自带说明为准。

> 🔴 **绝对不要**删除 `FiveM.app` 里的 `GTA5.exe`,它是游戏主程序!
> ReShade 的 `dxgi.dll` 也放在这个根目录。

---

## 🎨 步骤 4 · 安装 ReShade

> 🎯 **目标:** FiveM 根目录出现 `dxgi.dll` 和 `ReShade.ini`。

1. 从 [`https://reshade.me`](https://reshade.me) 下载并运行 ReShade 安装器。
2. 点击 **Select game**,选择 `FiveM.app` 文件夹里的 `GTA5.exe`(⚠️ 不是 Steam 里的!)。
3. 图形接口选择 **DirectX 10/11/12**。
4. 勾选下载着色器(Standard effects 等),等待完成。
5. 把画质包附带的 ReShade 预设(`.ini` 文件)复制到 `FiveM.app` 根目录。

> 💡 安装后根目录出现 `dxgi.dll` 和 `ReShade.ini` 是**正常现象**,别慌!

---

## ▶️ 步骤 5 · 游戏内启用

> 🎯 **目标:** 进服后画面发生明显变化!

1. 通过 FiveM 启动器进入任意服务器。
2. 游戏中按 **Home 键** 打开 ReShade 面板。
3. 在面板顶部下拉框选择画质包预设,勾选需要的特效。
4. 游戏设置中开启 **高级图形设置 → 超高**,效果更佳。

> ✅ **完成!** 欣赏你的新世界吧!🌆

> 🔴 按 Home 没反应?说明 `dxgi.dll` 没放对位置,回到步骤 3/4 检查。

---

## 🗂️ 文件放置总结

> 安装完成后,`FiveM.app` 文件夹应该是这样的结构:

| 文件 / 文件夹 | 放到哪里 | 说明 |
| --- | --- | --- |
| 📁 画质包文件(贴图、数据等) | `FiveM.app\data` | 大多数画质包(合并/覆盖) |
| 📁 NVE 等特殊画质包 | `FiveM.app` 根目录 | 按画质包自带说明放置 |
| 🔧 `dxgi.dll`(ReShade 核心) | `FiveM.app` 根目录 | ReShade 安装器自动生成 |
| ⚙️ ReShade 预设(`.ini`) | `FiveM.app` 根目录 | 游戏中按 Home 切换预设 |
| ☀️ ENB(单机模式) | GTA V 游戏根目录 | 从 enbdev.com 下载 |
| 🗑️ `caches` 缓存文件夹 | 删除(可选) | 重新生成缓存,避免冲突 |

> 🧠 **口诀:** 画质数据进 `data`,ReShade 三件套(`dxgi.dll`、`ReShade.ini`、预设 `.ini`)放根目录。

---

## ❓ 常见问题 FAQ

<details>
<summary><b>🎮 游戏打不开 / 闪退怎么办?</b></summary>

删除 `FiveM.app` 内的 `caches` 文件夹后重新启动;若仍不行,删除刚复制的画质包文件,逐个排除。
</details>

<details>
<summary><b>🐢 帧数太低怎么办?</b></summary>

在 ReShade 面板中减少开启的特效数量(尤其是模糊、光线类特效),或把预设强度调低。
</details>

<details>
<summary><b>⌨️ 按 Home 键没有反应?</b></summary>

确认 `dxgi.dll` 位于 `FiveM.app` 根目录,且画质包里的 `.ini` 预设也在该目录。
</details>

<details>
<summary><b>🚫 进服务器被踢出怎么办?</b></summary>

部分服务器禁止 ReShade / 画质包。进入此类服务器前请先在 ReShade 中点击 **Disable** 或删除 `dxgi.dll`。
</details>

<details>
<summary><b>🤔 为什么教程页面的图片和视频来自 GitHub?</b></summary>

教程页面(`index.html`)的所有媒体均通过 jsdelivr CDN 从 GitHub 仓库加载,无论你在本地、GitHub Pages 还是任意网站打开,媒体都从 GitHub 拉取,保证显示一致。
</details>

---

## 📖 更多资源

- 🖥️ **图文 + 视频教程:** 打开本仓库的 `index.html` 体验带视频的完整教程
- 🎥 **视频教程:** 视频位于 `assets/video/`
- 🌐 **FiveM 官网:** [`https://fivem.net`](https://fivem.net)
- 🎨 **ReShade:** [`https://reshade.me`](https://reshade.me)

---

<div align="center">

**© 2026 · FiveM 画质包安装指南**

*祝游戏愉快!🎉*

</div>
