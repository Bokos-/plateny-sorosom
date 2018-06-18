import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CanvasComponent from "./CanvasComponent";

class CanvasImageComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          canRender: false
        };

        this.image = null;
    }

    componentDidMount() {
        this.loadImage();
    }

    loadImage() {
        if (!this.image) {
          this.image = new Image();
          this.image.src = this.props.image;
          this.image.onload = () => {
            this.setState({ canRender: true });
          };
        }
    }

    render() {
        if (!this.state.canRender) {
            return null;
        }

      return <div id={"canvas-component"}>
        <CanvasComponent {...this.props} image={this.image} />
      </div>
    }
}

CanvasImageComponent.propTypes = {
  image: PropTypes.string.isRequired,
};

export default connect(
  null,
  null
)(CanvasImageComponent);