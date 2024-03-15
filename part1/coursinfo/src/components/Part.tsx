import { FC } from "react";
import { PartType } from "../App";

type PartProps = {
  part: PartType;
};

const Part: FC<PartProps> = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

export default Part;
