import { FC } from "react";
import { PartType } from "../App";
import Part from "./Part";

type ContentProps = {
  parts: PartType[];
};

const Content: FC<ContentProps> = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </>
  );
};

export default Content;
