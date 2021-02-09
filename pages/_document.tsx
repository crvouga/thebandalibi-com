import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    //why?: https://itnext.io/next-js-with-material-ui-7a7f6485f671
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      return originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
    };

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    //why?: https://stackoverflow.com/questions/45983301/google-pagespeed-eliminate-render-blocking-resources-above-the-fold-caused-fro
    const handleLoad = (
      event: React.SyntheticEvent<HTMLLinkElement, Event>
    ) => {
      const link = event.currentTarget;
      link.onload = null;
      link.rel = "stylesheet";
    };

    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            as="style"
            onLoad={handleLoad}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
