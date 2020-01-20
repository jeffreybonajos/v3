import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'
import { getServerSideToken, getUserScript } from "../lib/Auth";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const userData = await getServerSideToken(ctx.req);
    const sheet = new ServerStyleSheet()
    
    const styleTags = sheet.getStyleElement();
    return { ...props, ...userData, styleTags };
  }

  render() {
    const { user = {} } = this.props;

    return (
      <html>
        <Head>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </html>
    );
  }
}
