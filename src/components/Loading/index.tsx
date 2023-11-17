import React from "react";
import * as S from "./style";
import { ActivityIndicator } from "react-native";

function Loading() {
  return (
    <S.Loading>
      <ActivityIndicator size={100} />
      <S.Text>Carregando sua localização...</S.Text>
    </S.Loading>
  );
}

export default Loading;
