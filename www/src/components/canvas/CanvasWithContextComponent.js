import React from "react";
import CanvasImageComponent from "./CanvasImageComponent";

const withCanvasContextComponent = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.context = null;
      this.setContext = this.setContext.bind(this);
    }

    setContext(context) {
      this.context = context;
    }

    render() {
      return <Component context={this.context} canvas={<CanvasImageComponent {...this.props} setContext={this.setContext}/>} />
    }
  }
};


export default withCanvasContextComponent;

