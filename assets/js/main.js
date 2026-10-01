(() => {
  const desktopBreakpoint = window.matchMedia("(min-width: 768px)");

  document.querySelectorAll("[data-site-header]").forEach((header) => {
    const toggle = header.querySelector("[data-menu-toggle]");
    const menu = header.querySelector("[data-mobile-menu]");

    if (!toggle || !menu) return;

    const firstMenuLink = menu.querySelector("a");

    const setMenu = (open, { returnFocus = false } = {}) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
      menu.hidden = !open;

      if (open) {
        firstMenuLink?.focus();
      } else if (returnFocus) {
        toggle.focus();
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenu(!isOpen);
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false, { returnFocus: true });
      }
    });

    desktopBreakpoint.addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });
  });
})();
