/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function AppNav({ html, state }) {
  const theme = state?.store?.theme || "light";
  return html`<nav>
    <theme-switch theme="${theme}"></theme-switch>
  </nav>`;
}
