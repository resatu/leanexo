import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>LeanExo</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5b33ad559772aedf7cd44bf7/1530916305138-JT9LH8WZLC3WRPCMATLR/ke17ZwdGBToddI8pDm48kOmh8RaYNLpLTpNRk-8zo6VZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHdiPr3J1iMUIEhBI-aakGsSirXgBxrEvtyiouW2tF3HG0nsU3dfn6w--du8-EjPUE/favicon.ico?format=100w" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;