/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

const Header = () => (
  <div
    css={css`
      background-color: hotpink;
    `}
  >
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Header;
