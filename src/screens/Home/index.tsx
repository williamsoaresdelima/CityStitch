import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import * as S from "./styles";
import { RoutesType } from "../../routes/IRoutes";
import Map from "../../components/Map";
import ButtonComponent from "../../components/Button";
import { useLocation } from "../../contexts/location";
import Loading from "../../components/Loading";

const Home = () => {
  const { navigate } = useNavigation<RoutesType>();
  const { setLocation, location } = useLocation();

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      getLocation();
    })();
  }, []);

  if (!location.lon && location.lat) {
    getLocation();
  }

  async function getLocation() {
    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setLocation({ name: "Sua posição", lat: latitude, lon: longitude });
  }

  return (
    <S.Container>
      {location.lon && location.lat ? (
        <>
          <Map></Map>
          <S.ButtonContainer>
            <ButtonComponent
              callBackFunction={() => navigate("WaypointsList")}
              text="Visualizar todos os marcadores"
            ></ButtonComponent>
            <ButtonComponent
              callBackFunction={() => navigate("CreateMark")}
              text="Adicionar marcação"
            ></ButtonComponent>
          </S.ButtonContainer>
        </>
      ) : (
        <Loading />
      )}
    </S.Container>
  );
};

export default Home;
