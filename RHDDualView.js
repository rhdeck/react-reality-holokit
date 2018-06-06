import {
  View,
  processColor,
  Text,
  SafeAreaView,
  Platform,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import React, { Component } from "react";
import RNDI from "react-native-device-info";
import RHDPrimaryView from "./RHDPrimaryView";
import RHDSecondaryView from "./RHDSecondaryView";
const MetersPerInch = 0.0254;
const ipd = 0.064;
console.log("hi there!!!", ipd * PointsPerMeter, PixelsPerPoint, PixelsPerInch);
const DeviceDB = {
  "iPhone X": { pixels: 2436, ppi: 458, points: 812 },
  "iPhone 6 Plus": { pixels: 2208, ppi: 401, points: 736 },
  "iPhone 6": { pixels: 1334, ppi: 326, points: 667 },
  "iPhone 5": { pixels: 1136, ppi: 326, points: 568 }
};
const DeviceAliases = {
  "iPhone 6 Plus": "iPhone 6 Plus",
  "iPhone 7 Plus": "iPhone 6 Plus",
  "iPhone 8 Plus": "iPhone 6 Plus",
  "iPhone 6": "iPhone 6",
  "iPhone 7": "iPhone 6",
  "iPhone 8": "iPhone 6",
  "iPhone 5s": "iPhone 5",
  "iPhone SE": "iPhone 5",
  "iPhone X": "iPhone X"
};
const thisModel = RNDI.getModel();
const { pixels, ppi, points } = DeviceDB[DeviceAliases[thisModel]];
class RHDDualView extends Component {
  calculateIPD() {
    const ipd = this.props.interPupillaryDistance;
    const PixelsPerPoint = pixels / points;
    const MetersPerPixel = MetersPerInch / PixelsPerInch;
    const MetersPerPoint = MetersPerPixel * PixelsPerPoint;
    const PointsPerMeter = 1 / MetersPerPoint;
    const points = ipd * PointsPerMeter;
    return points;
  }
  getCurrentDevice() {
    Platform.dev;
  }
  render() {
    return (
      <View
        style={{
          ...this.props.style,
          height: "100%",
          width: "100%",
          backgroundColor: "red",
          alignItems: "center"
        }}
      >
        <View
          style={{
            ...this.props.style,
            flexDirection: "row",
            height: "100%",
            width: this.calculateIPD() * 2
          }}
        >
          <RHDPrimaryView
            {...this.props}
            style={{
              flex: 1
            }}
          />
          <RHDSecondaryView
            style={{
              flex: 1
            }}
          />
        </View>
      </View>
    );
  }
}
RHDDualView.propTypes = {
  ...RHDPrimaryView.propTypes
};
RHDDualView.defaultProps = {
  interPupillaryDistance: 0.064
};
export default RHDDualView;