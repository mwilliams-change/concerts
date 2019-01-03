/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box } from "@rebass/grid/emotion";

const Header = () => (
  <Box
    css={css`
      background-color: hotpink;
    `}
    as={"header"}
    fontSize={[4, 5]}
    p={[1, 2]}
  >
    {"Concerts App"}
  </Box>
);

export default Header;
