/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Grid = ({ children }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 10vw 30vw 10vw;
      grid-gap: 1em;
    `}
  >
    {children}
  </div>
);

export default Grid;
