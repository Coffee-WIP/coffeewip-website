import { AppProps } from "next/app";
import Head from "next/head";
import Container from "next/head";
import "../styles.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Container>
      <Head>
        <title>CoffeeWIP</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;
