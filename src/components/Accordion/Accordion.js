import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="New 1 Title"
        num={4}
        key="new 1"
      >
        <p>Test Element</p>
        <ul>
          <li>lorem sjasd asodfjlasdfj</li>
          <li>lorem sjasd asodfjlasdfj</li>
          <li>lorem sjasd asodfjlasdfj</li>
          <li>lorem sjasd asodfjlasdfj</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
