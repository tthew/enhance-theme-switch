/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function AppNav({ html, state }) {
  const theme = state?.store?.theme || "light";
  return html`<nav>
    <theme-switch theme="${theme}"></theme-switch>
  </nav>
  
  <style>
    nav {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
    }
  `;
}
