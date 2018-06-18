import React from "react";
import withCanvasContextComponent from "../canvas/CanvasWithContextComponent";

class TextComponent extends React.Component {

  render() {
    return <React.Fragment>{this.props.canvas}</React.Fragment>
  }
}

export default withCanvasContextComponent(TextComponent);