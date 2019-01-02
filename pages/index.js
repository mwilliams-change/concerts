/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { withRouter } from "next/router";

import data from "../data.json";
import { useMedia } from "../lib/usemedia";

import { Box } from "@rebass/grid/emotion";

import Page from "../layouts/main";
import Sidebar from "../components/Sidebar";
import ConcertTile from "../components/ConcertTile";

export default withRouter(
  withTheme(({ theme }) => {
    const isWide = useMedia(`(min-width: ${theme.breakpoints[0]})`);
    const defaultConcert = data[0];

    if (typeof window !== "undefined") {
      window.data = data;
    }

    return (
      <Page>
        <Box width={[1, 1 / 4]}>
          <Sidebar />
        </Box>

        {isWide ? (
          <Box width={3 / 4}>
            <ConcertTile {...defaultConcert} />
          </Box>
        ) : null}
      </Page>
    );
  })
);
