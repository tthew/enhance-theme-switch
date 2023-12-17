import { getStyles } from "@enhance/arc-plugin-styles";

const { linkTag } = getStyles;

/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>enhance-theme-switch</title>
      ${linkTag()}
      <link rel="icon" href="/_public/favicon.svg">
      <meta name="description" content="An example of an HTML & CSS first, progressively enhanced approach to global theme styling, with support for darkmode, levaging custom elements & web components built on top of https://enhance.dev">
    </head>
`;
}
