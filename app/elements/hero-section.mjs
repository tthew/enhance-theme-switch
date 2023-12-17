/**
 * @type {import('@enhance/types').EnhanceElemFn}
 */
export default function HeroSection({ html }) {
  return html` <section>
      <slot name="heading"></slot>
      <slot name="content"></slot>
    </section>

    <style>
      :host {
        position: relative;
        display: flex;
      }

      :host > section {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translate(-50%, -50%);
        transition: opacity 1s;
      }

      :host ::slotted([slot="heading"]),
      :host ::slotted([slot="content"]) {
        transition: 0.6s ease-out opacity, 0.6s ease-out transform;
      }

      :host ::slotted([slot="heading"]) {
        font-size: calc(3 * var(--text-5));
        font-weight: 800;
        text-wrap: balance;
        text-decoration: underline;
        text-align: center;
        transform: translate(0px, -150%);
      }

      :host ::slotted([slot="content"]) {
        display: flex;
        flex-direction: column;
        row-gap: var(--space-0);
        padding: var(--space-2) 0;
        width: 100%;
        font-size: var(--text-1);
        font-weight: 100;
        transform: translate(0, 100px);
        transition: 0.6s ease-out transform, 0.6s ease-out opacity;
      }

      body:has(theme-switch input:checked)
        :host[data-theme="dark"]
        ::slotted([slot="content"]),
      body:has(theme-switch input:checked)
        :host[data-theme="dark"]
        ::slotted([slot="heading"]) {
        opacity: 1;
        transform: translate(0, 0);
      }

      body:not(body:has(theme-switch input:checked))
        :host[data-theme="dark"]
        ::slotted([slot="content"]),
      body:not(body:has(theme-switch input:checked))
        :host[data-theme="dark"]
        ::slotted([slot="heading"]) {
        opacity: 0;
      }

      body:has(theme-switch input:checked)
        :host[data-theme="light"]
        ::slotted([slot="content"]),
      body:has(theme-switch input:checked)
        :host[data-theme="light"]
        ::slotted([slot="heading"]) {
        opacity: 0;
      }

      body:not(body:has(theme-switch input:checked))
        :host[data-theme="light"]
        ::slotted([slot="content"]),
      body:not(body:has(theme-switch input:checked))
        :host[data-theme="light"]
        ::slotted([slot="heading"]) {
        opacity: 1;
        transform: translate(0, 0);
      }

      body:has(theme-switch input:checked)
        :host[data-theme="light"]
        ::slotted([slot="content"]),
      body:not(body:has(theme-switch input:checked))
        :host[data-theme="dark"]
        ::slotted([slot="content"]) {
        transition: none;
      }

      :host ::slotted([slot="content"]) p + p {
        margin-top: var(--space--5);
      }

      :host ::slotted([slot="content"]) strong {
        font-weight: 400;
      }

      :host ::slotted([slot="content"]) ol {
        display: flex;
        flex-direction: column;
        row-gap: var(--space-1);
        padding-left: var(--space-0);
      }

      :host ::slotted([slot="content"]) ol li {
        flex-direction: column;
        row-gap: var(--space--5);
      }

      :host ::slotted([slot="content"]) em {
        font-weight: 200;
      }
    </style>`;
}
