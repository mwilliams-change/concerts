/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { map, forEach } from "lodash";
import { format } from "date-fns";
import Link from "next/link";

import data from "../data.json";

const Sidebar = () => {
  const concertsByYear = {};
  forEach(data, concert => {
    const year = format(concert.date, "YYYY");
    if (!concertsByYear[year]) concertsByYear[year] = [];
    concertsByYear[year].push(concert);
  });

  return (
    <div
      css={css`
        background-color: lightgreen;
        padding: 10px;
      `}
    >
      {map(concertsByYear, (concerts, year) => (
        <React.Fragment>
          <h3>{year}</h3>
          {map(concerts, concert => (
            <div>
              <Link href={`/concert?id=${concert.id}`}>{concert.title}</Link>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
