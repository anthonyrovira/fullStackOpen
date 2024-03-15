import { useState } from "react";
import Statistics from "./components/Statistics";

export type FeebackType = {
  good: number;
  neutral: number;
  bad: number;
};

const App = () => {
  const [good, setGood] = useState<FeebackType["good"]>(0);
  const [neutral, setNeutral] = useState<FeebackType["neutral"]>(0);
  const [bad, setBad] = useState<FeebackType["bad"]>(0);

  return (
    <div>
      <h2>Give feeback</h2>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>
      {!good && !neutral && !bad ? (
        <p>No Feebacks Given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

export default App;
