document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector(".md-content__inner");
  if (!main) return;

  const hr = document.createElement("hr");
  hr.style.marginTop = "2rem";

  const commentsDiv = document.createElement("div");
  commentsDiv.id = "giscus_thread";
  commentsDiv.style.marginTop = "2rem";

  main.appendChild(hr);
  main.appendChild(commentsDiv);

  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";

  script.setAttribute("data-repo", "BLTC-520/protocol-infra-notes-writeups");
  script.setAttribute("data-repo-id", "R_kgDOQ4BrMw");
  script.setAttribute("data-category", "Writeups");
  script.setAttribute("data-category-id", "DIC_kwDOQ4BrM84C02JV");

  script.setAttribute("data-mapping", "pathname");
  script.setAttribute("data-strict", "0");
  script.setAttribute("data-reactions-enabled", "1");
  script.setAttribute("data-emit-metadata", "1");
  script.setAttribute("data-input-position", "bottom");
  script.setAttribute("data-theme", "preferred_color_scheme");
  script.setAttribute("data-lang", "en");

  script.crossOrigin = "anonymous";
  script.async = true;

  commentsDiv.appendChild(script);
});
