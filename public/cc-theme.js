/**
 * Temporary sitewide theme (warm / cool). Loaded synchronously at end of body so the DOM and
 * window.__ccApplyTheme exist before any click. See BaseLayout.astro.
 * TODO: Remove before launch.
 */
(function () {
  "use strict";
  var KEY = "cc-theme";

  var WARM = {
    cream: "253 252 250",
    paper: "255 255 255",
    smoke: "218 228 218",
    ink: "30 44 47",
    muted: "78 96 90",
    sage: "76 118 92",
    "sage-dark": "38 78 58",
    "sage-soft": "212 226 216",
    clay: "158 86 64",
    sand: "186 170 152",
    line: "172 158 144",
    mist: "222 230 224",
    "clay-soft": "246 234 226",
  };

  var COOL = {
    cream: "236 242 246",
    paper: "255 255 255",
    smoke: "214 226 232",
    ink: "22 36 42",
    muted: "65 88 94",
    sage: "52 112 108",
    "sage-dark": "18 62 58",
    "sage-soft": "198 220 218",
    clay: "132 88 76",
    sand: "168 186 194",
    line: "154 176 186",
    mist: "208 222 232",
    "clay-soft": "214 228 236",
  };

  function apply(name) {
    var t = name === "cool" ? "cool" : "warm";
    var map = t === "cool" ? COOL : WARM;
    var root = document.documentElement;
    root.setAttribute("data-theme", t);
    for (var k in map) {
      if (Object.prototype.hasOwnProperty.call(map, k)) {
        root.style.setProperty("--color-" + k, map[k]);
      }
    }
  }

  function readStored() {
    try {
      return localStorage.getItem(KEY) === "cool" ? "cool" : "warm";
    } catch (e) {
      return "warm";
    }
  }

  window.__ccApplyTheme = apply;
  apply(readStored());

  var btn = document.getElementById("cc-theme-toggle");
  var label = document.getElementById("cc-theme-toggle-label");
  if (!btn || !label) return;

  btn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme") || "warm";
    var next = cur === "cool" ? "warm" : "cool";
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {}
    apply(next);
    label.textContent = next === "cool" ? "Theme: Cool" : "Theme: Warm";
  });

  label.textContent =
    (document.documentElement.getAttribute("data-theme") || "warm") === "cool" ? "Theme: Cool" : "Theme: Warm";
})();
