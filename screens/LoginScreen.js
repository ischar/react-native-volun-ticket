import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonGroupContainer } from "../layout/Container/ButtonGroupContainer.style";
import { LoginContainer } from "../layout/Container/LoginContainer.style";
import { LogoImage } from "../layout/Logo/Logo.styles";
import { ICON_NAMES } from "../utils/icons";
import { ICONS } from "../utils/icons";
import CustomButton from "../components/Button/CustomButton";
import InputField from "../components/InputField/InputField";

function LoginScreen() {
  const navigation = useNavigation();

  return (
    <LoginContainer>
      <LogoImage source={ICONS.get(ICON_NAMES.Logo)} />
      <>
        <InputField placeholder={"이메일"} />
        <InputField placeholder={"비밀번호"} />
        <CustomButton title="로그인" />
        <ButtonGroupContainer>
          <Button
            title="회원가입"
            onPress={() => navigation.navigate("Register")}
          />
          <Button title="아이디 찾기" />
        </ButtonGroupContainer>
      </>
    </LoginContainer>
  );
}

export default LoginScreen;
