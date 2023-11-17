import React from "react";
import IButtonComponent from "./IButtonComponent";
import * as S from "./style";

const ButtonComponent = ({ text, callBackFunction }: IButtonComponent) => {
  return (
    <S.CustomButton onPress={() => callBackFunction()}>
      <S.CustomText>{text}</S.CustomText>
    </S.CustomButton>
  );
};

export default ButtonComponent;
