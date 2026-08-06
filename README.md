<div align="center">

# 🎮 FiveM Graphics Pack Installation Guide

**Upgrade your GTA V to "photo-realistic" visuals · Bilingual · Beginner Friendly**

[![中文版本](https://img.shields.io/badge/%E8%AF%AD%E8%A8%80--%E4%B8%AD%E6%96%87%E7%89%88-ff4d6d)](README_zh-CN.md)

![Language](https://img.shields.io/badge/Language-Bilingual-ff4d6d)
![Platform](https://img.shields.io/badge/Platform-Windows-9b6dff)
![Level](https://img.shields.io/badge/Level-Beginner--Friendly-4ade80)
![Steps](https://img.shields.io/badge/Steps-5--Easy-ff4d6d)
![Method](https://img.shields.io/badge/Method-Text%2BVideo-f59e0b)
[![License](https://img.shields.io/badge/License-MIT-9b6dff)](LICENSE)

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
| [▶️ Step 5 · Launch and Enable](#-step-5--launch-and-enable) | The moment of truth |
| [🗂️ File Placement Summary](#-file-placement-summary) | Everything at a glance |
| [🧩 Advanced](#-advanced) | RPF / ASI / ReShade add-ons / F8 approval |
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
| 🎮 **Genuine GTA V** | Steam / Epic / Rockstar all work — install the **Legacy** build |
| 🖥️ **GPU** | GTX 1060 or better recommended (lower may lag) |
| 💾 **Disk space** | At least 30GB free |
| 🌐 **Internet** | Stable connection (for downloading packs & game files) |

> ⚠️ **Legacy, not Enhanced:** FiveM supports both builds, but **Enhanced** (early access since July 2026) is still unstable — graphic mods don't work there yet and the ecosystem is immature. This guide targets **Legacy** (install *Grand Theft Auto V Legacy* via the Rockstar Launcher).

---

## 📦 Step 1 · Install FiveM

> 🎯 **Goal:** A FiveM icon on your desktop, and you can join servers.

1. Open [`https://fivem.net`](https://fivem.net) and click **Download** to get the installer.
2. Run `FiveM.exe`; it installs automatically to the C: drive, then asks you to pick the GTA 5 folder (the folder must contain `GTA5.exe`).
3. Wait for the first-time setup to finish (it downloads some required files).
4. Launch FiveM, log in with your Rockstar account, and join a server in your own country to test.

✅ **Done when:** A FiveM icon appears on your desktop and you can play on a server.

> 🟢 No graphics pack wanted? You're done — just launch the game.

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

1. **Know the install path.** Pack files go into `FiveM.app`:
   - Default: `%localappdata%\FiveM\FiveM.app` (i.e. `C:\Users\[YourName]\AppData\Local\FiveM\FiveM.app`)
   - Custom installs live elsewhere, e.g. `D:\FiveM_Legacy\FiveM.app`
2. **Extract** the zip fully, open the folder, press `Ctrl + A` (select all), then `Ctrl + C` (copy).
3. Open `FiveM.app\data`, press `Ctrl + V` (paste); choose **Yes** when asked to merge/replace.
4. The pack ships its own `Mods` / `Plugins` folders? Copy them in **as-is** — don't create anything manually.
5. (Optional) Delete the `caches` folder so the game regenerates it — avoids conflicts.
6. A few packs (e.g. NVE) want files in the `FiveM.app` **root** instead of `data` — always follow the pack's instructions.

> 💡 **Rule of thumb:** Pack data goes into `data`; ReShade files go into `plugins` (Step 4).

---

## 🎨 Step 4 · Install ReShade (optional)

> 🎯 **Goal:** ReShade files end up in `FiveM.app\plugins`.

1. Download and run the ReShade installer from [`https://reshade.me`](https://reshade.me).
2. Click **Select game** and pick `FiveM.exe` in the FiveM folder (choosing `GTA5.exe` in the GTA V **Legacy** folder works too — same result).
3. Select **DirectX 10/11/12** and tick the shaders to download (Standard effects, etc.).
4. Open the folder of `FiveM.exe` (or the GTA V folder you picked) and **cut** the generated files into `FiveM.app\plugins`:
   - `dxgi.dll`, `ReShade.ini`, `ReShadePreset.ini`, `ReShade.log` and the `reshade-shaders` folder
5. Put the pack's ReShade preset (`.ini`) into `FiveM.app\plugins` too. Any location works, but then pick it in the ReShade panel or set `PresetPath=` in `ReShade.ini` so ReShade can find it.

> 💡 The ReShade files land in the folder you picked, but **FiveM only loads them from `FiveM.app\plugins`** — move them there or they won't work!

---

## ▶️ Step 5 · Launch and Enable

> 🎯 **Goal:** You can clearly see the visual change in-game!

1. Join any server through the FiveM launcher.
2. Press **Home** in-game to open the ReShade panel.
3. Pick your pack preset in the dropdown at the top and enable the effects you want.
4. In game settings, enable **Advanced Graphics → Very High** for the best look.

> 🟢 **Done!** Enjoy your new world! 🌆

> 🔴 Home does nothing? Check that `dxgi.dll` is in `FiveM.app\plugins`, and complete the **F8 approval** (see Advanced).

---

## 🗂️ File Placement Summary

> After installation, your `FiveM.app` folder should look like this:

| File / Folder | Destination | Notes |
| --- | --- | --- |
| 📁 Pack files (textures, data) | `FiveM.app\data` | Most graphics packs (merge/overwrite) |
| 📁 Pack's own Mods / Plugins folders | `FiveM.app\data` | Copy the whole folders in as-is |
| 📁 Special packs (e.g. NVE) | `FiveM.app` root | Follow the pack's instructions |
| 🔧 ReShade files (dxgi.dll, ReShade.ini, preset .ini, reshade-shaders, .addon) | `FiveM.app\plugins` | Everything goes here |
| 🔌 `.asi` plugins | `FiveM.app\plugins` | Servers may disallow |
| 🗂️ `.rpf` (single-player) | GTA V root\mods (create it) | Not loaded in multiplayer |
| ☀️ ENB (single-player) | GTA V game root | Download from enbdev.com |
| 🗑️ `caches` folder | Delete (optional) | Regenerates cache to avoid conflicts |

> 🧠 **Rule of thumb:** Pack data goes into `data`; all ReShade files go into `plugins`.

---

## 🧩 Advanced

<details>
<summary><b>🛠️ ReShade installed but nothing happens? (F8 approval)</b></summary>

FiveM detects ReShade and needs your **manual approval** in the config:
1. Press **F8** in-game to open the FiveM console.
2. Find the line starting with `[Addons] ReShade5=ID:xxxxxxx acknowledged ...`.
3. Open `%localappdata%\FiveM\FiveM.app\CitizenFX.ini` (custom installs: the matching FiveM.app).
4. Copy that line (**with your own ID**) to the **very bottom** of the file, under `[Addons]`.
5. Save and restart FiveM.

> ⚠️ The ID is unique per PC — don't copy the example ID!
</details>

<details>
<summary><b>🗂️ RPF / mods (single-player only)</b></summary>

In multiplayer, RPF content (models, maps) is streamed by the **server** — local `.rpf` files will **not** load. They only work in single-player: create a `mods` folder in the GTA V root (or use OpenIV → Tools → **Mods mode**), then put the `.rpf` files (and any `dlclist.xml` changes) inside.
</details>

<details>
<summary><b>🔌 ASI plugins</b></summary>

Modern FiveM ships with a `plugins` folder (create one if missing). Drop the `.asi` file in there and restart FiveM. Note: servers may **disallow plugins**, and outdated ones can crash the game — use at your own risk.
</details>

<details>
<summary><b>🎛️ ReShade add-ons</b></summary>

Download **ReShade with full add-on support** from reshade.me (the unsigned build; the signed one loads no add-ons). Put the author's `.addon` file (`.addon64` for 64-bit games like FiveM, `.addon32` for 32-bit) into `FiveM.app\plugins` and restart. `Registered add-on` in `ReShade.log` means it loaded. Note: the add-on build is **unsigned** — some servers may treat it as cheating; check server rules first.
</details>

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

Make sure `dxgi.dll`, `ReShade.ini` and the preset `.ini` are all in `FiveM.app\plugins`, and complete the **F8 approval** (see Advanced).
</details>

<details>
<summary><b>🚫 Kicked from a server?</b></summary>

Some servers ban ReShade / graphics packs. Click **Disable** in ReShade or remove `dxgi.dll` before joining such servers.
</details>

<details>
<summary><b>🔍 "Could not find game executable"?</b></summary>

Open `%localappdata%\FiveM\FiveM.app\CitizenFX.ini` and point `IVPath=` to your GTA V **Legacy** folder (e.g. `D:\SteamLibrary\steamapps\common\Grand Theft Auto V`), then save and restart FiveM.
</details>

<details>
<summary><b>🤖 Does FiveM support the Enhanced build?</b></summary>

Yes, but Legacy is recommended: Enhanced only entered early access in July 2026 — unstable, no graphic mods yet, immature ecosystem. This guide targets Legacy.
</details>

<details>
<summary><b>🌐 Why do the page assets load from GitHub + CDN?</b></summary>

`index.html` is a data-driven loader: CSS, scripts, content and images are fetched from the GitHub repo, with a **jsdelivr CDN fallback**. When GitHub is slow (longer than the timeout) or unreachable, the CDN is used automatically — the page works the same everywhere.
</details>

---

## 📖 More Resources

- 🖥️ **Text + Video Tutorial:** open `index.html` in this repo (fetches content from the repo itself)
- 🎥 **Video:** located in `assets/video/` (upload your demo video there)
- 🖼️ **Step diagrams:** `assets/img/` (SVG)
- 🌐 **FiveM website:** [`https://fivem.net`](https://fivem.net)
- 🎨 **ReShade:** [`https://reshade.me`](https://reshade.me)

---

<div align="center">

**© 2026 · FiveM Graphics Pack Installation Guide**

*Have fun in-game! 🎉*

</div>
