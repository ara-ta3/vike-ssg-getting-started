export default onRenderHtml;

import React from "react";
import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";

async function onRenderHtml(pageContext) {
  const { Page } = pageContext;
  const viewHtml = dangerouslySkipEscape(
    renderToString(
      <>
        <Page />
      </>,
    ),
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`;
}
