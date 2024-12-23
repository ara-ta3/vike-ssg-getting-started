import React from "react";
import ReactDOM from "react-dom/client";
import type { PageContextBuiltInClient } from "vike";

export { render as onRenderClient };

// クライアントサイドでページをレンダリング
async function render(pageContext: PageContextBuiltInClient) {
  const { Page, pageProps } = pageContext;
  const root = document.getElementById("root")!;

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Page {...pageProps} />
    </React.StrictMode>,
  );
}
