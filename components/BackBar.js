/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import { Box } from "@rebass/grid/emotion";

const BackBar = () => (
  <Box
    css={css`
      background-color: deepskyblue;
    `}
    p={[1, 2]}
  >
    <Link href="/">
      <Box
        css={css`
          cursor: pointer;
          text-decoration: none;
        `}
        fontSize={[5, 6]}
      >
        {"←"}
      </Box>
    </Link>
  </Box>
);

export default BackBar;
