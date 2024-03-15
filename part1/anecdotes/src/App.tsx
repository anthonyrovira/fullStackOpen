import { useState } from "react";
import AnecdoteOfTheDay from "./components/AnecdoteOfTheDay";
import AnecdoteMostVotes from "./components/AnecdoteMostVotes";

const anecdotes: string[] = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
];

const App = () => {
  const [selected, setSelected] = useState<number>(0);
  const [votes, setVotes] = useState<number[]>(
    new Array(anecdotes.length).fill(0)
  );

  return (
    <div>
      <AnecdoteOfTheDay
        anecdotes={anecdotes}
        selected={selected}
        setSelected={setSelected}
        votes={votes}
        setVotes={setVotes}
      />
      <AnecdoteMostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
