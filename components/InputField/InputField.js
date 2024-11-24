import { Input } from "./InputField.style";

function InputField({ placeholder, onChangeText, secureTextEntry = false }) {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

export default InputField;
