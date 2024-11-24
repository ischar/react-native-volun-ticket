import CustomButton from "../Button/CustomButton";
import {
  InfoActionBoxContainer,
  InfoActionBoxText,
  InfoActionButtonContainer
} from "./InfoActionBox.style";

function InfoActionBox({ content = "", title, onPress }) {
  return (
    <InfoActionBoxContainer>
      <InfoActionBoxText>{content}</InfoActionBoxText>
      <InfoActionButtonContainer>
        <CustomButton title={title} />
      </InfoActionButtonContainer>
    </InfoActionBoxContainer>
  );
}

export default InfoActionBox;
