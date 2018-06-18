import React from "react";
import vlastizradca from "../assets/vlastizradca.jpg"
import TextComponent from "../components/modules/vlastizradca";

class Home extends React.Component {
  render() {
    return <TextComponent image={vlastizradca} />;

  }
}

export default Home;
