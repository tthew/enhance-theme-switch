import enhance from "@enhance/element";
import ThemeSwitch from "../elements/theme-switch.mjs";

enhance("theme-switch", {
  render: ThemeSwitch,
  attrs: ["theme"],
  connected: async (el) => {
    const { matches: prefersDarkmode } = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    el.switchEl = el.querySelector(".theme-switch .theme-switch__input");
    el.switchEl.addEventListener("change", el.setTheme(el));

    const theme = await window.cookieStore.get("theme");

    if (theme?.value === "light") {
      return;
    }

    if (prefersDarkmode) {
      el.switchEl.checked = true;
    }
  },
  disconnected: (el) => {
    el.switchEl.removeEventListener("change", el.setTheme(el));
  },
  setTheme(el) {
    return (e) => {
      const theme = e.target.checked ? "dark" : "light";
      el.setAttribute("theme", theme);
      document.cookie = `theme=${theme}; path=/`;
    };
  },
});
