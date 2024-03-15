import { FC } from "react";

type AnecdoteMostVotesType = {
  anecdotes: string[];
  votes: number[];
};

const AnecdoteMostVotes: FC<AnecdoteMostVotesType> = ({ anecdotes, votes }) => {
  const indexOfTheMostVotedAnecdote = votes.findIndex(
    (vote) => vote === Math.max(...votes)
  );

  return (
    <section>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[indexOfTheMostVotedAnecdote]}</p>
      <p>
        has{" "}
        {votes[indexOfTheMostVotedAnecdote]
          ? votes[indexOfTheMostVotedAnecdote]
          : "no"}{" "}
        votes
      </p>
    </section>
  );
};

export default AnecdoteMostVotes;
