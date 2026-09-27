/* Command Center — nav active state + light helpers */
(function () {
  var path = (window.location.pathname || "").replace(/\\/g, "/");
  var file = path.split("/").pop() || "index.html";
  if (!file || file === "") file = "index.html";

  document.querySelectorAll(".nav a[data-nav]").forEach(function (el) {
    var key = el.getAttribute("data-nav");
    var match =
      (key === "home" && (file === "index.html" || file === "")) ||
      (key === "research" && file === "research.html") ||
      (key === "mission" && path.indexOf("/missions/") !== -1) ||
      (key === "investments" && file === "investments.html") ||
      (key === "lifestyle" && file === "lifestyle.html") ||
      (key === "prices" && file === "price-watches.html") ||
      (key === "org" && file === "org.html");
    if (match) el.classList.add("active");
  });
})();
