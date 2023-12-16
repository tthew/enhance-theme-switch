import enhance from "@enhance/element";
import ThemeSwitch from "../elements/theme-switch.mjs";

enhance("theme-switch", {
  render: ThemeSwitch,
  connected: async (el) => {
    const { matches: prefersDarkmode } = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    el.switchEl = el.querySelector(".switch");
    el.switchEl.addEventListener("change", el.setTheme);

    const theme = await window.cookieStore.get("theme");

    if (theme?.value === "light") {
      return;
    }

    if (prefersDarkmode) {
      el.switchEl.checked = true;
    }
  },
  disconnected: (el) => {
    el.switchEl.removeEventListener("change", el.setTheme);
  },
  setTheme(e) {
    const theme = e.target.checked ? "dark" : "light";
    document.cookie = `theme=${theme}; path=/`;
  },
});
