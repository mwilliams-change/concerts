import React from "react";
import App, { Container } from "next/app";

import theme from "../lib/theme";
import { ThemeProvider } from "emotion-theming";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
