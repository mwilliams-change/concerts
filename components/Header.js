/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

const style = css`
  background-color: hotpink;
`;

const linkStyle = css`
  margin-right: 15px;
  text-decoration: underline;
`;

const Header = () => (
  <div css={style}>
    <Link href="/">
      <a css={linkStyle}>Home</a>
    </Link>
  </div>
);

export default Header;
