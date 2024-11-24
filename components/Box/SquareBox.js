import { SquareBoxContainer, SquareBoxContent, SquareBoxText } from "./SquareBox.style";

function SquareBox({contentText}) {
  return (
    <SquareBoxContainer>
      <SquareBoxContent>

      </SquareBoxContent>
      <SquareBoxText>{contentText}</SquareBoxText>
    </SquareBoxContainer>
  );
};

export default SquareBox;