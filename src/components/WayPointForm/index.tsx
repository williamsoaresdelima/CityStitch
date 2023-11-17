import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as _ from "lodash";

import * as S from "./style";
import ButtonComponent from "../Button";
import IWayPointForm from "./IWayPointForm";
import { IItem, useWayPoints } from "../../contexts/wayPoints";
import { RoutesType } from "../../routes/IRoutes";
import Map from "../Map";

function WayPointForm({ isEdit, objectToView }: IWayPointForm) {
  const [name, setName] = useState<string>();
  const [latitude, setLatitude] = useState<string>();
  const [longitude, setLongitude] = useState<string>();
  const { setWayPoints, wayPoints } = useWayPoints();
  const { navigate } = useNavigation<RoutesType>();

  React.useEffect(() => {
    if (objectToView) {
      setName(objectToView.name);
      setLatitude(`${objectToView.lat}`);
      setLongitude(`${objectToView.lon}`);
    }
  }, []);

  function create(item: IItem) {
    setWayPoints([...wayPoints, item]);
    navigate("Home");
  }

  function edit(item: IItem) {
    const updatedWayPoints = wayPoints.map((wayPoint) => {
      if (_.isEqual(wayPoint, objectToView)) {
        return item;
      }
      return wayPoint;
    });

    if (_.isEqual(updatedWayPoints, wayPoints)) {
      setWayPoints([...wayPoints, item]);
    } else {
      setWayPoints([...updatedWayPoints]);
    }

    navigate("Home");
  }

  function createWayPoint() {
    if (name && latitude && longitude) {
      const item = { name, lat: +latitude, lon: +longitude };
      if (objectToView) {
        edit(item);
      } else {
        create(item);
      }
    }
  }

  return (
    <S.Container>
      <View>
        <S.Label>Nome:</S.Label>
        <S.Input
          editable={!objectToView || isEdit}
          onChangeText={(e) => setName(e)}
          value={name}
        ></S.Input>
        <S.Label>Latitude:</S.Label>
        <S.Input
          editable={!objectToView || isEdit}
          keyboardType="numeric"
          onChangeText={(e) => setLatitude(e.replace(/[^0-9\-,.]/g, ""))}
          value={latitude}
        ></S.Input>
        <S.Label>Longetude:</S.Label>
        <S.Input
          editable={!objectToView || isEdit}
          keyboardType="numeric"
          onChangeText={(e) => setLongitude(e.replace(/[^0-9\-,.]/g, ""))}
          value={longitude}
        ></S.Input>
      </View>
      {isEdit ? (
        <View>
          <ButtonComponent
            callBackFunction={() => createWayPoint()}
            text="Salvar"
          ></ButtonComponent>
        </View>
      ) : (
        <S.ViewMap>
          <Map item={objectToView} />
        </S.ViewMap>
      )}
    </S.Container>
  );
}

export default WayPointForm;
