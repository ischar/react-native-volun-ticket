import { View, Text, Pressable } from "react-native";
import { LoginButtonContainer, LoginText } from "./LoginButton.style";

function LoginButton() {
  return (
    <Pressable>
      <LoginButtonContainer>
        <LoginText>로그인</LoginText>
      </LoginButtonContainer>
    </Pressable>
  );
}

export default LoginButton;
