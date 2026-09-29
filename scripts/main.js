(function () {
  "use strict";
  function closeOpenSections(except) {
    document.querySelectorAll("details.dropdown[open]").forEach(function (section) {
      if (section !== except) section.open = false;
    });
  }
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (target && target.nodeType !== 1) target = target.parentElement;
    var summary = target && target.closest("details.dropdown > summary");
    if (!summary) return;
    var section = summary.parentElement;
    if (!section.open) closeOpenSections(section);
  });
  document.querySelectorAll("details.dropdown").forEach(function (section) {
    section.addEventListener("toggle", function () {
      if (section.open) closeOpenSections(section);
    });
  });
}());
