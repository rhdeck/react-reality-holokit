import { requireNativeComponent } from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { ARSessionConsumer, ARSessionProvider } from "react-reality";
class ARBasePrimaryView extends Component {
  render() {
    return [
      <NativeV {...this.props} children={null} key="ARPrimaryViewNative" />,
      <ARSessionConsumer key="ARPrimaryViewConsumer">
        {({ isStarted }) => {
          if (typeof isStarted === "undefined") {
            return (
              <ARSessionProvider
                gravity={
                  this.props.gravity
                    ? this.props.gravity
                    : ARSessionProvider.defaultProps.gravity
                }
              >
                {typeof this.props.children == "function" ? (
                  <ARSessionConsumer>this.props.children</ARSessionConsumer>
                ) : this.props.children ? (
                  this.props.children
                ) : null}
              </ARSessionProvider>
            );
          } else {
            return typeof this.props.children == "function" ? (
              <ARSessionConsumer>this.props.children</ARSessionConsumer>
            ) : this.props.children ? (
              this.props.children
            ) : null;
          }
        }}
      </ARSessionConsumer>
    ];
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
  stop: PropTypes.func,
  holoOffsetX: PropTypes.number,
  holoOffsetY: PropTypes.number,
  holoOffsetZ: PropTypes.number,
  fieldOfView: PropTypes.number
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
