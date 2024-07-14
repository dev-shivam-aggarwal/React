import { useState } from "react";

const About = ({ name }) => {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h2>Count: {count}</h2>
      <h3>Name: {name}</h3>
      <h3>Place: Delhi</h3>
      <h3>Hobbies: Coding</h3>
    </div>
  );
};

export default About;
