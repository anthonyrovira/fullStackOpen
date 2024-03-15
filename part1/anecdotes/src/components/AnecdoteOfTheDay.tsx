import { Dispatch, FC, SetStateAction } from "react";

type AnecdoteOfTheDayType = {
  anecdotes: string[];
  votes: number[];
  setVotes: Dispatch<SetStateAction<number[]>>;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

const AnecdoteOfTheDay: FC<AnecdoteOfTheDayType> = ({
  anecdotes,
  votes,
  setVotes,
  selected,
  setSelected,
}) => {
  return (
    <section>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected] ? votes[selected] : "no"} votes</p>
      <div>
        <button
          onClick={() =>
            setSelected((previousSelected) => {
              let newSelected = previousSelected;
              while (newSelected === previousSelected) {
                newSelected = Math.floor(Math.random() * anecdotes.length);
              }
              return newSelected;
            })
          }
        >
          Next anecdote
        </button>
        <button
          onClick={() => {
            const copyVotes = [...votes];
            copyVotes.splice(selected, 1, copyVotes[selected] + 1);
            setVotes(copyVotes);
          }}
        >
          Vote
        </button>
      </div>
    </section>
  );
};

export default AnecdoteOfTheDay;
