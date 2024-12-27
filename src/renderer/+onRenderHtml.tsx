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
  const title = pageContext.config.title || "default title";
  const description = pageContext.config.description || "default description";

  return escapeInject`<!DOCTYPE html>
    <html>
        <title>${title}</title>
        <meta name="description" content="${description}">
        <body>
            <div id="page-view">${viewHtml}</div>
        </body>
    </html>`;
}
