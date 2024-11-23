import { Input } from "./InputField.style";

function InputField({ placeholder, onChangeText }) {
  return <Input placeholder={placeholder} onChangeText={onChangeText} />;
}

export default InputField;
