/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function ThemeSwitch({ html, state }) {
  const checked = state?.attrs?.theme === "dark" ? "checked" : "";

  return html`
    <label>
      <span class="sr-only">Toggle dark mode</span>
      <input type="checkbox" name="checkbox" ${checked} />
    </label>

    <style>
      :host label {
        right: 1rem;
        position: absolute;
        display: flex;
        column-gap: 0.25rem;
        align-items: center;
        font-size: 2rem;
      }

      :host label::before {
        content: "🌝";
      }

      :host input[type="checkbox"] {
        appearance: none;
        position: relative;
        display: inline-block;
        background: lightgrey;
        height: 1lh;
        width: 1.75lh;
        vertical-align: middle;
        border-radius: 33px;
        box-shadow: 0px 1px 3px #0003 inset;
        transition: 0.25s linear;
      }

      :host input[type="checkbox"]:checked::before {
        transform: translateX(0.6lh);
      }

      :host input[type="checkbox"]::before {
        content: "";
        display: block;
        width: calc(1lh * 0.8);
        height: calc(1lh * 0.8);
        background: var(--back);
        border-radius: 1.2rem;
        position: absolute;
        top: calc(1lh * 0.09);
        left: calc(1lh * 0.155);
        box-shadow: 0px 1px 3px #0003;
        opacity: 1;
        outline: none;
        transition: 0.25s linear transform, 0.25s linear outline,
          0.25s ease-out background-color;
        transform: translateX(0rem);
      }

      :host input[type="checkbox"]::focus {
        outline-color: transparent;
      }

      :host label input.switch::focus-visible {
        outline: 2px solid hsl(--accent-h, --accent-s, --accent-l);
        outline-offset: 2px;
      }

      :host label:has(input[type="checkbox"]:checked)::before {
        content: "🌚" !important;
      }

      :host input[type="checkbox"]:checked {
        background: transparent;
        outline: 1px solid
          hsl(var(--accent-h), var(--accent-s), var(--accent-l));
      }

      :host input[type="checkbox"]:checked::before {
        background: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
      }
    </style>
  `;
}
