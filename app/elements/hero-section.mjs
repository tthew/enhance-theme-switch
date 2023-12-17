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

      :host > section ::slotted([slot="heading"]) {
        font-size: calc(3 * var(--text-5));
        font-weight: 800;
        text-wrap: balance;
        text-decoration: underline;
        text-align: center;
      }

      :host[data-theme="dark"] {
        opacity: 0;
      }

      :host[data-theme="dark"] ::slotted([slot="heading"]) {
        transform: translate(0px, -150%);
        transition: transform 0.66s ease-out;
      }

      :host[data-theme="light"] {
        opacity: 1;
      }

      :host[data-theme="light"] ::slotted([slot="heading"]) {
        transform: translate(0, 0px);
        transition: transform 0.66s ease-out;
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
        transition: 0.6s ease-out transform;
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

      body:has(theme-switch input:checked) :host[data-theme="dark"] {
        opacity: 1;
      }

      body:has(theme-switch input:checked) :host[data-theme="light"] {
        opacity: 0;
      }

      body:not(body:has(theme-switch input:checked))
        :host[data-theme="light"]
        ::slotted([slot="content"]) {
        transform: translate(0, 0);
      }

      body:not(body:has(theme-switch input:checked))
        :host[data-theme="dark"]
        ::slotted([slot="content"]) {
        transform: translate(0, 100px);
      }

      body:has(theme-switch input:checked)
        :host[data-theme="light"]
        ::slotted([slot="content"]) {
        transform: translate(0, 100px);
      }

      body:has(theme-switch input:checked)
        :host[data-theme="dark"]
        ::slotted([slot="content"]) {
        transform: translate(0, 0);
      }

      body:has(theme-switch input:checked)
        :host[data-theme="dark"]
        ::slotted([slot="heading"]) {
        z-index: 1;
        transform: translate(0, 0);
      }

      body:has(theme-switch input:checked) :host[data-theme="light"] {
        opacity: 0;
      }

      body:has(theme-switch input:checked)
        :host[data-theme="light"]
        ::slotted([slot="heading"]) {
        z-index: 0;
        transform: translate(0, -150%);
      }
    </style>`;
}
