document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const categoryButtons = document.querySelectorAll(".category-btn");
  const panels = document.querySelectorAll(".category-panel");

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active-panel"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.panel).classList.add("active-panel");
    });
  });

  document.querySelectorAll(".category-panel").forEach(panel => {
    const buttons = panel.querySelectorAll(".sub-btn");
    const contents = panel.querySelectorAll(".menu-content");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active-content"));
        btn.classList.add("active");
        panel.querySelector("#" + btn.dataset.menu).classList.add("active-content");
      });
    });
  });
});
