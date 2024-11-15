import React from "react";
import { Pressable, Image } from "react-native";
import { ICONS } from "../../utils/icons";

function ImageButton({ imageName }) {
  return (
    <Pressable>
      <Image source={ICONS.get(imageName)} />
    </Pressable>
  );
}

export default ImageButton;
