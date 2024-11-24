import { useState } from "react";
import { Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonGroupContainer } from "../layout/Container/ButtonGroupContainer.style";
import { LoginContainer } from "../layout/Container/LoginContainer.style";
import { LogoImage } from "../layout/Logo/Logo.styles";
import { ICON_NAMES } from "../utils/icons";
import { ICONS } from "../utils/icons";
import { API } from "../utils/apiUrl";
import CustomButton from "../components/Button/CustomButton";
import InputField from "../components/InputField/InputField";
import axios from "axios";
import { saveToken } from "../utils/saveToken";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${API.USER}/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      saveToken("accessToken", response.data);
      Alert.alert("로그인 성공");
    } catch (error) {
      email = "";
      password = "";
      Alert.alert("로그인 실패", error.response.data.error);
    }
  };

  const navigation = useNavigation();

  return (
    <LoginContainer>
      <LogoImage source={ICONS.get(ICON_NAMES.Logo)} />
      <>
        <InputField placeholder={"이메일"} onChangeText={handleEmailChange} />
        <InputField
          placeholder={"비밀번호"}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <CustomButton title="로그인" onPress={handleLogin} />
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
