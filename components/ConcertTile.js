/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box } from "@rebass/grid/emotion";
import { format } from "date-fns";

const ConcertTile = ({ title, date, venue, image }) => (
  <div
    css={css`
      background-color: lightblue;
    `}
  >
    <img
      css={css`
        width: 100%;
      `}
      src={image.small}
    />
    <Box
      css={css`
        text-align: center;
      `}
      p={[2, 3]}
    >
      <Box fontSize={[4, 5]}>{title}</Box>
      <Box fontSize={[2, 3]}>{format(date, "MMMM Do, YYYY")}</Box>
      <Box fontSize={[1, 2]}>{venue}</Box>
    </Box>
  </div>
);

export default ConcertTile;
