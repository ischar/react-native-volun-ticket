import { Pressable } from "react-native";
import { CustomButtonContainer, ButtonText } from "./CustomButton.style";

function CustomButton({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <CustomButtonContainer>
        <ButtonText>{title}</ButtonText>
      </CustomButtonContainer>
    </Pressable>
  );
}

export default CustomButton;
