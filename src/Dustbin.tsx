import type { CSSProperties, FC, useState } from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
  height: "50vh",
  width: "50vh",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left"
};

const nodes = [<div>Hello world</div>, <div>Hello world</div>];

export const Dustbin: FC = ({ data, setData }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      console.log(monitor.getClientOffset());

      const pos = monitor.getClientOffset();

      setData((current) => [
        ...current,
        {
          x: pos.x,
          y: pos.y
        }
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#111";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div>
      <svg
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
      >
        {data.map((obj, idx) => (
          <circle
            cx={obj.x}
            cy={obj.y}
            r="40"
            stroke="green"
            strokeWidth="4"
            fill="yellow"
            key={idx}
          >
            Hello
          </circle>
        ))}

        {isActive ? "Release to drop" : "Drag a box here"}
      </svg>
      {nodes.map((node, idx) => (
        <div
          style={{ zIndex: "9999", color: "white", fontSize: "100px" }}
          key={idx}
        >
          {node}
        </div>
      ))}
    </div>
  );
};
