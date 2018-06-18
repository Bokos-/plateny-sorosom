/*eslint no-restricted-globals: ["error", "event"]*/

import React from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setContextRef } from "../actions/canvasActions";

const HEIGHT_RATIO = 0.8;

const canvasProperties = {
  resolution: 3,

  _height: function() {
    return screen.height * HEIGHT_RATIO;
  },

  _width: function() {
    return screen.width;
  },

  height: function() {
    return this._height() * this.resolution;
  },

  width: function() {
    return this._width() * this.resolution;
  },

  css: function() {
    return {
      width: `${this._width()}px`,
      height: `${this._height()}px`
    };
  }
};

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.props.setContextRef(this.canvasRef.current.getContext("2d"));
  }

  render() {
    return (
      <canvas
        width={canvasProperties.width()}
        height={canvasProperties.height()}
        style={canvasProperties.css()}
        ref={this.canvasRef}
      />
    );
  }
}

CanvasComponent.propTypes = {
  setContextRef: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setContextRef }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(CanvasComponent);
