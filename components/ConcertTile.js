/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ConcertTile = ({ title, date, venue, image }) => (
  <div
    css={css`
      background-color: lightblue;
    `}
  >
    <div>{title}</div>
    <div>{date}</div>
    <div>{venue}</div>
    <img
      css={css`
        width: 100%;
      `}
      src={image.small}
    />
  </div>
);

export default ConcertTile;
