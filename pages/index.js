/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import data from "../data.json";
import { useMedia } from "../lib/usemedia";

import Page from "../layouts/main";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ConcertTile from "../components/ConcertTile";

export default () => {
  const isWide = useMedia("(min-width: 768px)");
  const defaultConcert = data[0];

  if (typeof window !== "undefined") {
    window.data = data;
  }

  return (
    <Page>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "header   header"
            "sidebar sidebar";
          @media (min-width: 768px) {
            grid-template-columns: 1fr 3fr;
            grid-template-areas:
              "header   header"
              "sidebar content";
          }
        `}
      >
        <div
          css={css`
            grid-area: header;
          `}
        >
          <Header />
        </div>
        <div
          css={css`
            grid-area: sidebar;
          `}
        >
          <Sidebar />
        </div>

        {isWide ? (
          <div
            css={css`
              grid-area: content;
            `}
          >
            <ConcertTile {...defaultConcert} />
          </div>
        ) : null}
      </div>
    </Page>
  );
};
