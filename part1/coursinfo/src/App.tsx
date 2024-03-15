import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export type PartType = {
  name: string;
  exercises: number;
};

const App = () => {
  const parts: PartType[] = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  const sumOfExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header />
      <Content parts={parts} />
      <Footer sumOfExercises={sumOfExercises} />
    </div>
  );
};

export default App;
