import Document, { Head, Main, NextScript } from "next/document";
import { getServerSideToken, getUserScript } from "../lib/Auth";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const userData = await getServerSideToken(ctx.req);

    return { ...props, ...userData };
  }

  render() {
    const { user = {} } = this.props;

    return (
      <html>
        <Head>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
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
