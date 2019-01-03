/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Box } from "@rebass/grid/emotion";
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
        padding: 10px;
      `}
    >
      {map(concertsByYear, (concerts, year) => (
        <React.Fragment>
          <h3>{year}</h3>
          {map(concerts, concert => (
            <Link href={`/concert?id=${concert.id}`}>
              <Box
                css={css`
                  background-color: gainsboro;
                  border: solid 1px darkgray;
                  border-radius: 5px;
                  cursor: pointer;
                `}
                mb={[1, 2]}
                p={[1, 2]}
              >
                <Box fontSize={[0, 1]}>{format(concert.date, "MMMM Do")}</Box>
                <Box fontSize={[3, 4]}>{concert.title}</Box>
                <Box fontSize={[2, 3]}>{concert.venue}</Box>
              </Box>
            </Link>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
