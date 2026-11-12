// Small scripts for the site: the news list on the homepage and the
// publication lists on publications.html. Content lives in data/*.js.

(function () {
  "use strict";

  var ME = "Shijun Cheng";

  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function esc(text) {
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ---- Homepage: news ----
  var newsBox = document.getElementById("news-list");
  if (newsBox && window.NEWS) {
    newsBox.innerHTML = "";
    window.NEWS.forEach(function (item) {
      var row = el("div", "news-item");
      row.appendChild(el("div", "date", esc(item.date)));
      row.appendChild(el("div", "text", item.text)); // text may contain simple links
      newsBox.appendChild(row);
    });
  }

  // ---- Publications page ----
  function renderList(targetId, items) {
    var box = document.getElementById(targetId);
    if (!box || !items) return;
    box.innerHTML = "";
    var years = [];
    items.forEach(function (p) { if (years.indexOf(p.y) < 0) years.push(p.y); });
    years.sort(function (a, b) { return b - a; });

    years.forEach(function (year) {
      var group = el("div", "year-group");
      group.appendChild(el("h3", null, String(year)));
      var list = el("ol");
      items.filter(function (p) { return p.y === year; }).forEach(function (p) {
        var li = el("li", "pub");
        li.appendChild(el("div", "title", esc(p.t)));

        var authors = p.a.map(function (name) {
          var safe = esc(name);
          return name.indexOf(ME) === 0 ? "<b>" + safe + "</b>" : safe;
        }).join(", ");
        li.appendChild(el("div", "authors", authors));

        var venue = "<em>" + esc(p.v) + "</em>" + (p.d ? ", " + esc(p.d) : "");
        if (p.s) venue += '<span class="status">' + esc(p.s) + "</span>";
        li.appendChild(el("div", "venue", venue));

        if (p.link || p.code) {
          var links = el("div", "pub-links");
          if (p.link) links.appendChild(extLink(p.link, "Paper"));
          if (p.code) links.appendChild(extLink(p.code, "Code"));
          li.appendChild(links);
        }
        list.appendChild(li);
      });
      group.appendChild(list);
      box.appendChild(group);
    });
  }

  function extLink(href, label) {
    var a = el("a", null, label);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  }

  renderList("journal-list", window.JOURNALS);
  renderList("conference-list", window.CONFERENCES);

  var jc = document.getElementById("journal-count");
  var cc = document.getElementById("conference-count");
  if (jc && window.JOURNALS) jc.textContent = window.JOURNALS.length;
  if (cc && window.CONFERENCES) cc.textContent = window.CONFERENCES.length;

  // Tabs: All / Journal / Conference
  var tabs = document.querySelectorAll(".tabs button");
  Array.prototype.forEach.call(tabs, function (btn) {
    btn.addEventListener("click", function () {
      var show = btn.getAttribute("data-show");
      Array.prototype.forEach.call(tabs, function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      var j = document.getElementById("journals");
      var c = document.getElementById("conferences");
      if (j) j.hidden = show === "conferences";
      if (c) c.hidden = show === "journals";
    });
  });
})();
