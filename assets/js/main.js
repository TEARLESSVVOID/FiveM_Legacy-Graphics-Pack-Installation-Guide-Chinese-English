/* ======================================================================
 * FiveM 教程 · 主脚本 / Main script (rendering engine)
 * 由 index.html 的引导脚本加载（GitHub 优先，慢/失败切 CDN）。
 * Loaded by the bootstrap in index.html (GitHub first, CDN fallback).
 * 依赖 bootstrap 提供的全局变量 / Depends on globals set by bootstrap:
 *   window.CONFIG / window.RAW_URL / window.CDN_URL / window.FETCH_ANY
 * ====================================================================== */

var CONFIG = window.CONFIG;
var RAW_URL = window.RAW_URL;          // GitHub 直连 / direct GitHub
var CDN_URL = window.CDN_URL;          // jsdelivr CDN 备用 / CDN fallback
var LOAD_TIMEOUT = window.LOAD_TIMEOUT;

function showLoadError() {
  document.getElementById("notice").style.display = "block";
}

/* ======================================================================
 * 媒体资源：GitHub 优先，onerror 或超时（LOAD_TIMEOUT）自动切 CDN
 * Media assets: GitHub first; on error or timeout, switch to CDN.
 * ====================================================================== */
function attachFallback(el, path, prop) {
  prop = prop || "src"; // 媒体源用 src；封面用 poster / "src" for media, "poster" for cover
  var switched = false;
  var done = false;
  el.addEventListener("load", function () { done = true; });
  el.addEventListener("error", function () {
    if (!done && !switched) { switched = true; el[prop] = CDN_URL(path); }
  });
  setTimeout(function () {
    if (!done && !switched) { switched = true; el[prop] = CDN_URL(path); }
  }, LOAD_TIMEOUT);
}

function makeImg(path, className, alt) {
  var img = document.createElement("img");
  img.className = className;
  img.alt = alt || "";
  img.src = RAW_URL(path) + "?t=" + Date.now();
  attachFallback(img, path, "src");
  return img;
}

function setVideo(v, path) {
  v.src = RAW_URL(path) + "?t=" + Date.now();
  attachFallback(v, path, "src");
}

function setPoster(v, path) {
  v.poster = RAW_URL(path) + "?t=" + Date.now();
  attachFallback(v, path, "poster");
}

/* ======================================================================
 * 渲染引擎 / Rendering engine —— 把 content.json 变成页面
 * 支持的块类型 / Block types: p, note, h3, ol, ul, img, table, faqs, code, video
 * ====================================================================== */
function biBlock(zhHtml, enHtml, tag) {
  tag = tag || "div";
  var box = document.createElement("div");
  ["zh", "en"].forEach(function (lang) {
    var el = document.createElement(tag);
    el.className = lang;
    el.innerHTML = lang === "zh" ? zhHtml : enHtml;
    box.appendChild(el);
  });
  return box;
}

function renderBlock(blk) {
  if (blk.p) return biBlock(blk.p.zh, blk.p.en, "p");
  if (blk.h3) return biBlock(blk.h3.zh, blk.h3.en, "h3");
  if (blk.note) {
    var n = document.createElement("div");
    n.className = "note" + (blk.note.kind ? " " + blk.note.kind : "");
    n.appendChild(biBlock(blk.note.zh, blk.note.en));
    return n;
  }
  if (blk.ol || blk.ul) {
    var tag = blk.ol ? "ol" : "ul";
    var box = document.createElement("div");
    [["zh", blk.ol ? blk.ol.zh : blk.ul.zh], ["en", blk.ol ? blk.ol.en : blk.ul.en]].forEach(function (pair) {
      var list = document.createElement(tag);
      list.className = pair[0];
      pair[1].forEach(function (item) {
        var li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
      });
      box.appendChild(list);
    });
    return box;
  }
  if (blk.img) {
    var box2 = document.createElement("div");
    [["zh", blk.img.zh, blk.img.capZh], ["en", blk.img.en, blk.img.capEn]].forEach(function (pair) {
      var img = makeImg(pair[1], "step-img");
      var cap = document.createElement("div");
      cap.className = "img-cap";
      cap.textContent = pair[2];
      var wrap = document.createElement("div");
      wrap.className = pair[0];
      wrap.appendChild(img);
      wrap.appendChild(cap);
      box2.appendChild(wrap);
    });
    return box2;
  }
  if (blk.table) {
    var box3 = document.createElement("div");
    [["zh", blk.table.zh], ["en", blk.table.en]].forEach(function (pair) {
      var t = document.createElement("table");
      t.className = pair[0];
      var thead = document.createElement("thead");
      var trH = document.createElement("tr");
      pair[1].head.forEach(function (h) {
        var th = document.createElement("th");
        th.innerHTML = h;
        trH.appendChild(th);
      });
      thead.appendChild(trH);
      t.appendChild(thead);
      var tbody = document.createElement("tbody");
      pair[1].rows.forEach(function (row) {
        var tr = document.createElement("tr");
        row.forEach(function (cell) {
          var td = document.createElement("td");
          td.innerHTML = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      t.appendChild(tbody);
      box3.appendChild(t);
    });
    return box3;
  }
  if (blk.faqs) {
    var box4 = document.createElement("div");
    [["zh", blk.faqs.zh], ["en", blk.faqs.en]].forEach(function (pair) {
      var col = document.createElement("div");
      col.className = pair[0];
      pair[1].forEach(function (item) {
        var d = document.createElement("details");
        var s = document.createElement("summary");
        s.textContent = item.q;
        var p = document.createElement("p");
        p.innerHTML = item.a;
        d.appendChild(s);
        d.appendChild(p);
        col.appendChild(d);
      });
      box4.appendChild(col);
    });
    return box4;
  }
  if (blk.code) {
    var pre = document.createElement("pre");
    pre.textContent = blk.code;
    return pre;
  }
  if (blk.video) {
    var box5 = document.createElement("div");
    var badgeZ = document.createElement("span");
    badgeZ.className = "badge zh";
    badgeZ.textContent = blk.video.badgeZh;
    var badgeE = document.createElement("span");
    badgeE.className = "badge en";
    badgeE.textContent = blk.video.badgeEn;
    box5.appendChild(badgeZ);
    box5.appendChild(badgeE);
    var wrap = document.createElement("div");
    wrap.className = "video-wrap";
    var v = document.createElement("video");
    v.id = "tutorialVideo";
    v.controls = true;
    v.preload = "metadata";
    var path = blk.video.video || CURRENT_META.video;
    setVideo(v, path);
    setPoster(v, langIs("en") ? CURRENT_META.posterEn : CURRENT_META.posterZh);
    wrap.appendChild(v);
    box5.appendChild(wrap);
    var capZ = document.createElement("div");
    capZ.className = "img-cap zh";
    capZ.textContent = blk.video.capZh;
    var capE = document.createElement("div");
    capE.className = "img-cap en";
    capE.textContent = blk.video.capEn;
    box5.appendChild(capZ);
    box5.appendChild(capE);
    return box5;
  }
  return document.createTextNode("");
}

// HTML 转义 / HTML escaping
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderPage(data) {
  var m = data.meta;
  document.title = langIs("en") ? m.titleEn : m.titleZh;
  document.getElementById("siteTitle").innerHTML =
    '<span data-zh="' + esc(m.h1.zh) + '" data-en="' + esc(m.h1.en) + '"></span>' +
    '<span data-zh="' + esc(m.h1sub.zh) + '" data-en="' + esc(m.h1sub.en) + '"></span>';

  var nav = document.getElementById("toc");
  nav.innerHTML = "";
  data.nav.forEach(function (item) {
    var a = document.createElement("a");
    a.href = "#" + item.id;
    a.setAttribute("data-zh", item.zh);
    a.setAttribute("data-en", item.en);
    nav.appendChild(a);
  });

  var main = document.getElementById("content");
  main.innerHTML = "";
  data.sections.forEach(function (sec) {
    var s = document.createElement("section");
    s.id = sec.id;
    var h2 = document.createElement("h2");
    h2.setAttribute("data-zh", sec.h2.zh);
    h2.setAttribute("data-en", sec.h2.en);
    var small = document.createElement("small");
    small.setAttribute("data-zh", sec.sub.zh);
    small.setAttribute("data-en", sec.sub.en);
    h2.appendChild(small);
    s.appendChild(h2);
    sec.body.forEach(function (blk) { s.appendChild(renderBlock(blk)); });
    main.appendChild(s);
  });

  var footer = document.getElementById("siteFooter");
  footer.innerHTML = "";
  m.footer.forEach(function (line) {
    var p = document.createElement("p");
    p.setAttribute("data-zh", line.zh);
    p.setAttribute("data-en", line.en);
    footer.appendChild(p);
  });

  initLang();
}

/* ======================================================================
 * 语言切换 / Language switch
 * ====================================================================== */
function langIs(en) {
  return document.documentElement.getAttribute("data-lang") === "en";
}

function setLang(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  document.getElementById("btnZh").classList.toggle("active", lang === "zh");
  document.getElementById("btnEn").classList.toggle("active", lang === "en");
  document.querySelectorAll("[data-zh][data-en]").forEach(function (el) {
    el.textContent = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-zh");
  });
  var vid = document.getElementById("tutorialVideo");
  if (vid) {
    setPoster(vid, lang === "en" ? CURRENT_META.posterEn : CURRENT_META.posterZh);
  }
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function initLang() {
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  setLang(saved === "en" ? "en" : "zh");
}

var CURRENT_META = { posterZh: "", posterEn: "", video: "" };

/* ======================================================================
 * 启动：拉取内容并渲染 / Boot: fetch and render
 * 内容从 GitHub 拉取，慢/失败自动切 CDN（见 bootstrap 的 FETCH_ANY）。
 * ====================================================================== */
if (!CONFIG.OK) {
  showLoadError();
} else {
  FETCH_ANY(CONFIG.content, true)
    .then(function (data) {
      CURRENT_META = data.meta;
      renderPage(data);
    })
    .catch(function (err) {
      console.error("load content failed:", err);
      showLoadError();
    });
}

var backTop = document.getElementById("backTop");
window.addEventListener("scroll", function () {
  backTop.classList.toggle("show", window.scrollY > 600);
});
backTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
