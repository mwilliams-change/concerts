/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { withRouter } from "next/router";

import data from "../data.json";

import { Box } from "@rebass/grid/emotion";

import Page from "../layouts/main";
import IsDesktop from "../components/IsDesktop";
import Sidebar from "../components/Sidebar";
import ConcertTile from "../components/ConcertTile";

export default withRouter(
  withTheme(({ theme }) => {
    const defaultConcert = data[0];

    return (
      <Page>
        <Box width={[1, 1 / 4]}>
          <Sidebar />
        </Box>

        <IsDesktop>
          <Box width={3 / 4}>
            <ConcertTile {...defaultConcert} />
          </Box>
        </IsDesktop>
      </Page>
    );
  })
);
