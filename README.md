<div align="center">

# 🎮 FiveM Graphics Pack Installation Guide

**Upgrade your GTA V to "photo-realistic" visuals · Bilingual · Beginner Friendly**

[![中文版本](https://img.shields.io/badge/语言-中文版-ff4d6d)](README_zh-CN.md)

![Language](https://img.shields.io/badge/Language-Bilingual-ff4d6d)
![Platform](https://img.shields.io/badge/Platform-Windows-9b6dff)
![Level](https://img.shields.io/badge/Level-Beginner-Friendly-4ade80)
![Steps](https://img.shields.io/badge/Steps-5-Easy-ff4d6d)
![Method](https://img.shields.io/badge/Method-Text+Video-f59e0b)

> 🚀 Step-by-step guide to install graphics packs — **no PC skills required!**

</div>

---

## 📚 Table of Contents

| Section | Description |
| --- | --- |
| [💡 What is this?](#-what-is-this) | Graphics packs in 1 minute |
| [✅ Requirements](#-requirements) | What you need before starting |
| [📦 Step 1 · Install FiveM](#-step-1--install-fivem) | Lay the foundation |
| [⬇️ Step 2 · Download a Pack](#-step-2--download-a-pack) | Pick your graphics pack |
| [📂 Step 3 · Copy Files](#-step-3--copy-files) | The most critical step |
| [🎨 Step 4 · Install ReShade](#-step-4--install-reshade) | Cinematic filter engine |
| [▶️ Step 5 · Enable In-Game](#-step-5--enable-in-game) | The moment of truth |
| [🗂️ File Placement Summary](#-file-placement-summary) | Everything at a glance |
| [❓ FAQ](#-faq) | Troubleshooting guide |

---

## 💡 What is this?

**FiveM** is a large multiplayer mod platform for GTA V — more gameplay, more freedom.
A **graphics pack** is like giving your game a pair of "high-end glasses":

- 🏙️ **NVE (NaturalVision Evolved)** — widely regarded as the most realistic; photo-quality visuals
- 🎬 **QuantV** — cinematic color grading with a highly stylized look
- 🌈 **ReShade presets** — free visual filters, perfect for beginners
- ☀️ **ENB (ENBSeries)** — visual enhancement for single-player mode

> 💡 **In one sentence:** This guide installs a graphics pack + ReShade into FiveM for a brand-new look!

---

## ✅ Requirements

| Requirement | Details |
| --- | --- |
| 🎮 **Genuine GTA V** | Steam / Epic / Rockstar all work |
| 🖥️ **GPU** | GTX 1060 or better recommended (lower may lag) |
| 💾 **Disk space** | At least 30GB free |
| 🌐 **Internet** | Stable connection (for downloading packs & game files) |

<div align="center">
<img src="https://img.shields.io/badge/✔️-All-Ready-4ade80" alt="Ready"/>
</div>

---

## 📦 Step 1 · Install FiveM

> 🎯 **Goal:** A FiveM icon on your desktop, and you can join servers.

1. Open [`https://fivem.net`](https://fivem.net) and click **Download** to get the installer.
2. Run `FiveM.exe`; the installer auto-detects your GTA V path. If not found, select the GTA 5 folder manually.
3. Wait for the base installation to finish (it downloads required files on first run).
4. Launch FiveM, log in with your Rockstar account, and join any server to test.

✅ **Done when:** A FiveM icon appears on your desktop and you can play on a server.

> ⚠️ **Note:** You may quit the game afterwards and continue to the next step.

---

## ⬇️ Step 2 · Download a Pack

> 🎯 **Goal:** Get a graphics pack, **fully extracted**.

| Pack | Highlights | How to get |
| --- | --- | --- |
| 🏙️ **NVE** | Most realistic, photo-quality | Patreon (supports the author; FiveM-specific version available) |
| 🎬 **QuantV** | Cinematic tones, stylized look | Official store |
| 🌈 **ReShade presets** | Free, clearly visible results | Tons of free presets on GitHub |
| ☀️ **ENB** | Single-player visual boost | Free at [`enbdev.com`](https://enbdev.com/news.html) |

> ⚠️ **Key reminder:** You usually get a **zip archive** — **extract it fully**!
> Never try to use files from inside the zip directly.

---

## 📂 Step 3 · Copy Files

> 🎯 **Goal:** Pack files correctly placed in the FiveM directory.
> ⚠️ This is the **most critical** step — take your time!

1. Press `Win + R`, type `%localappdata%` and press Enter.
2. Open `FiveM → FiveM.app`.
3. Copy the **extracted pack files** into `FiveM.app\data` (choose "Yes" when asked to merge/overwrite).
4. (Optional) Delete the `caches` folder so the game regenerates it — this avoids conflicts.
5. Some packs (e.g. NVE) require files in the `FiveM.app` **root** — always follow the pack's own instructions.

> 🔴 **Never** delete `GTA5.exe` inside `FiveM.app` — it's the game binary!
> ReShade's `dxgi.dll` also lives in this root folder.

---

## 🎨 Step 4 · Install ReShade

> 🎯 **Goal:** `dxgi.dll` and `ReShade.ini` appear in the FiveM root folder.

1. Download and run the ReShade installer from [`https://reshade.me`](https://reshade.me).
2. Click **Select game** and choose `GTA5.exe` inside the `FiveM.app` folder (⚠️ not the Steam one!).
3. Select **DirectX 10/11/12** as the graphics API.
4. Tick the shaders to download (Standard effects, etc.) and wait for it to finish.
5. Copy the pack's ReShade preset (`.ini`) into the `FiveM.app` root.

> 💡 Seeing `dxgi.dll` and `ReShade.ini` in the root afterwards is **normal** — don't panic!

---

## ▶️ Step 5 · Enable In-Game

> 🎯 **Goal:** You can clearly see the visual change in-game!

1. Join any server through the FiveM launcher.
2. Press **Home** in-game to open the ReShade panel.
3. Pick your pack preset in the dropdown at the top and enable the effects you want.
4. In game settings, enable **Advanced Graphics → Very High** for the best look.

> ✅ **Done!** Enjoy your new world! 🌆

> 🔴 Home does nothing? `dxgi.dll` is not in the right place — check Steps 3/4 again.

---

## 🗂️ File Placement Summary

> After installation, your `FiveM.app` folder should look like this:

| File / Folder | Destination | Notes |
| --- | --- | --- |
| 📁 Pack files (textures, data) | `FiveM.app\data` | Most graphics packs (merge/overwrite) |
| 📁 Special packs (e.g. NVE) | `FiveM.app` root | Follow the pack's own instructions |
| 🔧 `dxgi.dll` (ReShade core) | `FiveM.app` root | Created by the ReShade installer |
| ⚙️ ReShade preset (`.ini`) | `FiveM.app` root | Switch presets in-game with Home |
| ☀️ ENB (single-player) | GTA V game root | Download from enbdev.com |
| 🗑️ `caches` folder | Delete (optional) | Regenerates cache to avoid conflicts |

> 🧠 **Rule of thumb:** Pack data goes into `data`; the ReShade trio (`dxgi.dll`, `ReShade.ini`, preset `.ini`) goes in the root.

---

## ❓ FAQ

<details>
<summary><b>🎮 Game crashes / won't start?</b></summary>

Delete the `caches` folder inside `FiveM.app` and relaunch. If it persists, remove the pack files you copied and test them one by one.
</details>

<details>
<summary><b>🐢 Frame rate too low?</b></summary>

Disable some effects in the ReShade panel (especially blur / light effects), or lower the preset intensity.
</details>

<details>
<summary><b>⌨️ Pressing Home does nothing?</b></summary>

Make sure `dxgi.dll` is in the `FiveM.app` root and the pack's `.ini` preset is there too.
</details>

<details>
<summary><b>🚫 Kicked from a server?</b></summary>

Some servers ban ReShade / graphics packs. Click **Disable** in ReShade or remove `dxgi.dll` before joining such servers.
</details>

<details>
<summary><b>🤔 Why do media files load from GitHub?</b></summary>

All media on the tutorial page (`index.html`) is loaded from a GitHub repo via the jsdelivr CDN, so it looks the same no matter where the page is opened — locally, on GitHub Pages, or any website.
</details>

---

## 📖 More Resources

- 🖥️ **Text + Video Tutorial:** open `index.html` in this repo for the full video guide
- 🎥 **Video:** located in `assets/video/`
- 🌐 **FiveM website:** [`https://fivem.net`](https://fivem.net)
- 🎨 **ReShade:** [`https://reshade.me`](https://reshade.me)

---

<div align="center">

**© 2026 · FiveM Graphics Pack Installation Guide**

*Have fun in-game! 🎉*

</div>
