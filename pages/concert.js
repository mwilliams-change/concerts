/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import { withRouter } from "next/router";
import { Box } from "@rebass/grid/emotion";
import find from "lodash/fp/find";

import data from "../data.json";
import { useMedia } from "../lib/usemedia";

import Page from "../layouts/main";
import BackBar from "../components/BackBar";
import Sidebar from "../components/Sidebar";
import ConcertTile from "../components/ConcertTile";

export default withRouter(
  withTheme(({ router, theme }) => {
    // console.log("theme", theme);
    const isWide = useMedia(`(min-width: ${theme.breakpoints[0]})`);
    const concert =
      find({ id: parseInt(router.query.id, 10) })(data) || data[0];

    console.log("isWide", isWide);

    return (
      <Page>
        {isWide ? (
          <Box width={1 / 4}>
            <Sidebar />
          </Box>
        ) : null}
        <Box width={[1, 3 / 4]}>
          {!isWide ? <BackBar /> : null}
          <ConcertTile {...concert} />
        </Box>
      </Page>
    );
  })
);
