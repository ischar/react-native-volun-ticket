import { useState } from "react";
import { Alert } from "react-native";
import { StyledSafeAreaView } from "../layout/StyledSafeAreaView.style";
import { LoginContainer } from "../layout/Container/LoginContainer.style";
import { LogoImage } from "../layout/Logo/Logo.styles";
import { ICONS, ICON_NAMES } from "../utils/icons";
import { TitleText } from "../components/TitleText/TitleText.style";
import { EmailContainer } from "../layout/Container/EmailContainer.style";
import { EmailButtonContainer } from "../layout/Button/EmailButton.style";
import { useNavigation } from "@react-navigation/native";
import { API } from "../utils/apiUrl";
import LabelInputField from "../components/InputField/LabelInputField";
import CustomButton from "../components/Button/CustomButton";
import axios from "axios";
import qs from "qs";

function RegisterScreen() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [validEmail, setValidEmail] = useState(false);
  const navigation = useNavigation();

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleEmailCheck = (currentEmail) => {
    axios.post();
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${API.USER}/register`,
        qs.stringify({
          email: email,
          username: username,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      Alert.alert("회원가입 성공", response.data.message);
      navigation.goBack();
    } catch (error) {
      Alert.alert("회원가입 실패", error.response.data.error);
    }
  };

  return (
    <>
      <StyledSafeAreaView />
      <LoginContainer>
        <LogoImage source={ICONS.get(ICON_NAMES.Logo)} />
        <TitleText>Sign Up</TitleText>
        <>
          <EmailContainer>
            <LabelInputField title="email" onChangeText={handleEmailChange} />
            <EmailButtonContainer>
              <CustomButton title="확인" onPress={handleEmailCheck} />
            </EmailButtonContainer>
          </EmailContainer>
          <LabelInputField
            title="username"
            onChangeText={handleUsernameChange}
          />
          <LabelInputField
            title="password"
            onChangeText={handlePasswordChange}
          />
        </>
        <CustomButton title="회원가입" onPress={handleRegister} />
      </LoginContainer>
    </>
  );
}

export default RegisterScreen;
