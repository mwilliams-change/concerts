/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withRouter } from "next/router";
import { Box } from "@rebass/grid/emotion";
import find from "lodash/fp/find";

import data from "../data.json";

import Page from "../layouts/main";
import IsDesktop from "../components/IsDesktop";
import IsMobile from "../components/IsMobile";
import BackBar from "../components/BackBar";
import Sidebar from "../components/Sidebar";
import ConcertTile from "../components/ConcertTile";

export default withRouter(({ router }) => {
  const concert = find({ id: parseInt(router.query.id, 10) })(data) || data[0];

  return (
    <Page>
      <IsDesktop>
        <Box
          css={css`
            overflow-y: scroll;
          `}
          flex={"1"}
        >
          <Sidebar />
        </Box>
      </IsDesktop>
      <Box flex={"2 0px"}>
        <IsMobile>
          <Box pt={[4, 5]}>
            <BackBar />
          </Box>
        </IsMobile>
        <ConcertTile {...concert} />
      </Box>
    </Page>
  );
});
