import { requireNativeComponent } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { ARSessionConsumer } from "react-reality";
class ARBasePrimaryView extends Component {
  render() {
    var out = [
      <NativeV {...this.props} children={null} key="ARPrimaryViewNative" />
    ];
    if (typeof this.props.children == "function") {
      out.push(
        <ARSessionConsumer key="ARPrimaryViewConsumer">
          {this.props.children}
        </ARSessionConsumer>
      );
    } else {
      out.push(this.props.children);
    }
    return out;
  }
  componentDidMount() {
    if (typeof this.props.start == "function") this.props.start();
  }
  componentWillUnmount() {
    if (typeof this.props.stop == "function") this.props.stop();
  }
}
ARBasePrimaryView.propTypes = {
  interPupilaryDistance: PropTypes.number,
  start: PropTypes.func,
  stop: PropTypes.func
};
const NativeV = requireNativeComponent("ARPrimaryView", ARBasePrimaryView);
const ARPrimaryView = props => {
  return (
    <ARSessionConsumer>
      {({ start, stop }) => {
        return <ARBasePrimaryView {...props} start={start} stop={stop} />;
      }}
    </ARSessionConsumer>
  );
};
ARPrimaryView.propTypes = { ...ARBasePrimaryView.propTypes };
export default ARPrimaryView;
