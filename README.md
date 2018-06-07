# react-reality-holokit

Extension for [React Reality](https://github.com/rhdeck/react-reality) to support stereoscopic headmounted AR via use of the [Holokit](https://holokit.io).

# Installation

This is a JS-only extension of react-reality. To install along with peer dependencies:

```
yarn add \
  rhdeck/react-reality-holokit
  rhdeck/react-reality \
  react-native-swift \
  react-native-device-info
react-native link
```

# Usage

Note that the ARDualView is designed to be full height/width for your window. All interpupillary distance calculations are based on that assumption.

```xml
<ARSessionProvider>
    <ARDualView style={{height: "100%", width: "100%"}} >
        { Your nodes! }
    </ARDualView>
</ARSessionProvider>
```

# Credit-Where-Credit-Is-Due

Also the headset view uses ideas from [iOS-ARKit-Headset-View](https://github.com/hanleyweng/iOS-ARKit-Headset-View) which is a cool Swift-first project

And of course the best headset is Holokit from Amber Garage, who gave a talk at ARiA in January that was my inspiration for getting headset view going in the first place!
