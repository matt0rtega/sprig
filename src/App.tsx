import "./styles.css";
import { useRef, CSSProperties } from "react";
import { useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "./Example";

export default function App() {
  const inputEl = useRef(null);
  const node = <div ref={inputEl}>Hello</div>;

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}
