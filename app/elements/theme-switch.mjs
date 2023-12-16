/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function ThemeSwitch({ html, state }) {
  const checked = state?.store?.theme === "dark" ? "checked" : "";

  return html`
    <label>
      <span class="sr-only">Toggle dark mode</span>
      <input
        id="dark-theme"
        type="checkbox"
        name="checkbox"
        class="switch"
        ${checked}
      />
    </label>
    <link rel="stylesheet" href="/_public/theme-switch.css" />
  `;
}
