/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withRouter } from "next/router";
import find from "lodash/fp/find";

import data from "../data.json";
import { useMedia } from "../lib/usemedia";

import Page from "../layouts/main";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ConcertTile from "../components/ConcertTile";

export default withRouter(({ router }) => {
  const isWide = useMedia("(min-width: 768px)");
  const concert = find({ id: parseInt(router.query.id, 10) })(data) || data[0];

  return (
    <Page>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "header   header"
            "content content";
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
        {isWide ? (
          <div
            css={css`
              grid-area: sidebar;
            `}
          >
            <Sidebar />
          </div>
        ) : null}
        <div
          css={css`
            grid-area: content;
          `}
        >
          <ConcertTile {...concert} />
        </div>
      </div>
    </Page>
  );
});
