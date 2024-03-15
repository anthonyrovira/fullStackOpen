import { FC } from "react";

type FooterProps = {
  sumOfExercises: number;
};

const Footer: FC<FooterProps> = ({ sumOfExercises }) => {
  return (
    <footer>
      <p>Number of exercises {sumOfExercises}</p>
    </footer>
  );
};

export default Footer;
