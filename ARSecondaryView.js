import { requireNativeComponent } from "react-native";
import React, { Component } from "react";
class ARSecondaryView extends Component {
  render() {
    return <NativeV {...this.props} />;
  }
}
ARSecondaryView.propTypes = {};
const NativeV = requireNativeComponent("ARSecondaryView", ARSecondaryView);
export default ARSecondaryView;
