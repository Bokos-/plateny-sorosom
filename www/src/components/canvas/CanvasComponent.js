/*eslint no-restricted-globals: ["error", "event"]*/

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const MAX_HEIGHT = screen.height * 0.8;
const MAX_WIDTH = screen.width;
const RESOLUTION = 3;

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const context = this.canvasRef.current.getContext("2d");
    this.drawImage(context);
    this.props.setContext(context);
  }

  drawImage(context) {
    context.drawImage(this.props.image, 0, 0, this.getWidth() * RESOLUTION, this.getHeight() * RESOLUTION);
  }

  getRatio() {
    return Math.min(MAX_WIDTH/this.props.image.width, MAX_HEIGHT/this.props.image.height);
  }

  getWidth() {
    return this.props.image.width * this.getRatio();
  }

  getHeight() {
    return this.props.image.height * this.getRatio();
  }

  render() {

    const style = {
      width: `${this.getWidth()}px`,
      height: `${this.getHeight()}px`
    };

    return (
      <canvas
        width={this.getWidth() * RESOLUTION}
        height={this.getHeight() * RESOLUTION}
        ref={this.canvasRef}
        style={style}
      />
    );
  }
}

CanvasComponent.defaultProps = {
  setContext: () => {}
};

CanvasComponent.propTypes = {
  image: PropTypes.object.isRequired,
  setContext: PropTypes.func
};


export default connect(
  null,
  null
)(CanvasComponent);
