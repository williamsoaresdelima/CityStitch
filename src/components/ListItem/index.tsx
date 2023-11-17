import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./style";
import ButtonComponent from "../Button";
import { RoutesType } from "../../routes/IRoutes";
import { IItem } from "../../contexts/wayPoints";

const ListItem = (mark: IItem) => {
  const { navigate } = useNavigation<RoutesType>();

  return (
    <S.Container>
      <S.ItemName>{mark.name}</S.ItemName>
      <S.Item>Latitude: {mark.lat}</S.Item>
      <S.Item>Longitude: {mark.lon}</S.Item>
      <S.ButtonsContainer>
        <ButtonComponent
          callBackFunction={() => navigate("Details", mark)}
          text="Visualizar"
        ></ButtonComponent>
        <ButtonComponent
          callBackFunction={() => navigate("CreateMark", mark)}
          text="Editar"
        ></ButtonComponent>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default ListItem;
