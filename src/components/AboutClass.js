import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Default Name",
        place: "Default Place"
      },
    };
    console.log(" Constructor");
  }

  async componentDidMount() {
    console.log("Component DidMount")
    const data = await fetch(
      "https://api.github.com/users/dev-shivam-aggarwal"
    );
    const json = await data.json();
    console.log(json);

    this.setState({
        userInfo:{
            name:json.name,
            place:json.location,
            avatar:json.avatar_url
        }
    })
  }

  componentDidUpdate() {
    console.log("Component DidUpdate");
  }

  componentWillUnmount() {
    console.log("Component WillUnmount");
  }

  render() {
    console.log(" Render");
    const { userInfo } = this.state;
    return (
      <div className="user-card">
        <h1>Class Component</h1>
        <img src={userInfo.avatar}></img>
        <h3>Name: {userInfo.name}</h3>
        <h3>Place: {userInfo.place}</h3>
        <h3>Hobbies: Coding</h3>
      </div>
    );
  }
}

export default AboutClass;
