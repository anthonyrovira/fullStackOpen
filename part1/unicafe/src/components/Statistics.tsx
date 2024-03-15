import { FC } from "react";
import { FeebackType } from "../App";
import StatisticsLine from "./StatisticsLine";

export type StatisticsContentType = {
  text: string;
  value: number;
};

const Statistics: FC<FeebackType> = ({ good, neutral, bad }) => {
  const statisticsContents: StatisticsContentType[] = [
    {
      text: "Good",
      value: good,
    },
    {
      text: "Neutral",
      value: neutral,
    },
    {
      text: "Bad",
      value: bad,
    },
    {
      text: "All",
      value: good + neutral + bad,
    },
    {
      text: "Average",
      value: (good - bad) / (good + neutral + bad),
    },
    {
      text: "Positive",
      value: (good / (good + neutral + bad)) * 100,
    },
  ];

  return (
    <table>
      {statisticsContents.map((content, index) => (
        <StatisticsLine key={index} {...content} />
      ))}
    </table>
  );
};

export default Statistics;
