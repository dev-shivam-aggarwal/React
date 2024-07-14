import About from "./About";
import AboutClass from "./AboutClass";
import React from "react";

class AboutBody extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <h1>I'm About us Page</h1>
        <AboutClass name="First Child" />
      </>
    );
  }
}

export default AboutBody;
