import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + " Constructor")
  }

  async componentDidMount() {
    // console.log(this.props.name + ' Component Did Mount')
    const data = await fetch("https://api.github.com/users/rajkbharali");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(this.props.name + " Component Rendered")

    return (
      <div className="flex flex-col justify-center items-center">
        <img className="w-56" src={this.state.userInfo.avatar_url} />
        <h2 className="text-lg font-semibold">rajkbharali@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
