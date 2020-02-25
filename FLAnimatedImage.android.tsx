import React, { Component } from "react";
import { Image } from "react-native";
import { FLAnimatedImageProps } from "./typedefs";

class FLAnimatedImage extends Component<FLAnimatedImageProps> {
  render() {
    return <Image {...this.props} />;
  }
}

export default FLAnimatedImage;
