import { useState, useEffect } from "react";

import { Content } from "../../layout/Content/Content.styles";
import { StyledSafeAreaView } from "../../layout/StyledSafeAreaView.style";
import InfoActionBox from "../../components/Box/InfoActionBox";
import SquareBox from "../../components/Box/SquareBox";
import { jwtDecode } from "jwt-decode";
import { getToken } from "../../utils/token";
function ProfileScreen() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userInfo = async () => {
      try {
        const token = await getToken();
        if (token) {
          const decoded = jwtDecode(token);
          setEmail(decoded.sub);
        }
      } catch (error) {
        console.log(error);
      }
    };

    userInfo();
  }, [email]);

  return (
    <>
      <StyledSafeAreaView />
      <Content>
        <InfoActionBox content="1000" title="봉사" />
        <SquareBox contentText={email} />
        <InfoActionBox title="봉사" />
      </Content>
    </>
  );
}

export default ProfileScreen;
