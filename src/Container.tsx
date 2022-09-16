import type { FC } from "react";
import { memo, useState } from "react";

import { Box } from "./Box";
import { Dustbin } from "./Dustbin";

export const Container: FC = memo(function Container() {
  const [data, setData] = useState([
    {
      x: 200,
      y: 100
    },
    {
      x: 300,
      y: 200
    },
    {
      x: 400,
      y: 200
    }
  ]);

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Dustbin data={data} setData={setData} />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Box name="Circle" data={data} setData={setData} />
        <Box name="Banana" />
        <Box name="Paper" />
      </div>
    </div>
  );
});
