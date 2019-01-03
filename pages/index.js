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
        <Box
          css={css`
            overflow-y: scroll;
          `}
          flex={"1"}
          mt={[4, 5]}
        >
          <Sidebar />
        </Box>

        <IsDesktop>
          <Box flex={"2 0px"}>
            <ConcertTile {...defaultConcert} />
          </Box>
        </IsDesktop>
      </Page>
    );
  })
);
