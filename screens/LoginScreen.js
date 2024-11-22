import { Button } from "react-native";
import InputField from "../components/InputField/InputField";
import { LoginContainer } from "../layout/Container/LoginContainer.style";
import { LogoImage } from "../layout/Logo/Logo.styles";
import { ICON_NAMES } from "../utils/icons";
import { ICONS } from "../utils/icons";
import LoginButton from "../components/Button/\bLoginButton";
import { ButtonGroupContainer } from "../layout/Container/ButtonGroupContainer.style";

function LoginScreen() {
  return (
    <LoginContainer>
      <LogoImage source={ICONS.get(ICON_NAMES.Logo)} />
      <>
        <InputField placeholder={"이메일"} />
        <InputField placeholder={"비밀번호"} />
        <LoginButton />
        <ButtonGroupContainer>
          <Button title="회원가입" />
          <Button title="아이디 찾기" />
        </ButtonGroupContainer>
      </>
    </LoginContainer>
  );
}

export default LoginScreen;
