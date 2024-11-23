import { LabelInputFieldContainer } from "./LabelInputField.style";
import { SubText } from "../SubText/SubText.style";
import InputField from "./InputField";

function LabelInputField({ title, onChangeText }) {
  return (
    <LabelInputFieldContainer>
      <SubText>{title}</SubText>
      <InputField onChangeText={onChangeText} />
    </LabelInputFieldContainer>
  );
}

export default LabelInputField;
