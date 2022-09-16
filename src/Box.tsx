import type { CSSProperties, FC } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left"
};

export interface BoxProps {
  name: string;
}

interface DropResult {
  name: string;
}

export const Box: FC<BoxProps> = function Box({ name, data, setData }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    isDragging: (monitor) => {
      console.log(monitor.getClientOffset());
      console.log(monitor.getDifferenceFromInitialOffset());
      console.log(monitor.getSourceClientOffset());
      console.log(Math.random());
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        setData((current) => [
          ...current,
          {
            x: 500,
            y: 300
          }
        ]);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {name}
    </div>
  );
};
