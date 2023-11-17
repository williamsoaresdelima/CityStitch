import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./style";
import ListItem from "../../components/ListItem";
import ButtonComponent from "../../components/Button";
import { RoutesType } from "../../routes/IRoutes";
import { useWayPoints } from "../../contexts/wayPoints";

export function WaypointsList() {
  const { navigate } = useNavigation<RoutesType>();
  const { wayPoints } = useWayPoints();

  const handleNavigate = (route: any): void => {
    navigate(route);
  };

  return (
    <S.Container>
      {wayPoints.length ? (
        <S.ListView>
          {wayPoints.map(({ lat, lon, name }, idx) => (
            <ListItem name={name} lat={lat} lon={lon} key={idx}></ListItem>
          ))}
        </S.ListView>
      ) : (
        <S.EmpytList>
          <S.EmpytMessage>Não ha marcadores ainda!</S.EmpytMessage>
          <ButtonComponent
            callBackFunction={() => handleNavigate("CreateMark")}
            text="Criar Marcador"
          ></ButtonComponent>
        </S.EmpytList>
      )}
    </S.Container>
  );
}

export default WaypointsList;
