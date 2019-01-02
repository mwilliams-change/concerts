import React from "react";
import App, { Container } from "next/app";

import { Global, css } from "@emotion/core";

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
          <Global
            styles={css`
              * {
                font-family: Arial, Helvetica, sans-serif;
              }
              body {
                margin: 0;
              }
            `}
          />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
