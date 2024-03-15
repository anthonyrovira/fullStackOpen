import { FC } from "react";
import { StatisticsContentType } from "./Statistics";

const StatisticsLine: FC<StatisticsContentType> = ({ text, value }) => {
  return (
    <tr>
      <td>{text} : </td>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticsLine;
