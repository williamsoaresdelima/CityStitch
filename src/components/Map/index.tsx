import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import { IItem, useWayPoints } from "../../contexts/wayPoints";
import { IMap, IMapPress } from "./IMap";
import { RoutesType } from "../../routes/IRoutes";
import { useLocation } from "../../contexts/location";

const Map = ({ item }: IMap) => {
  const [itemToCreate, setItemToCreate] = React.useState<IItem>();
  const { wayPoints } = useWayPoints();
  const { navigate } = useNavigation<RoutesType>();
  const { location } = useLocation();
  const { latitude, longitude, zoom } = {
    latitude: item ? item.lat : location.lat,
    longitude: item ? item.lon : location.lon,
    zoom: item ? 15 : 13,
  };

  function markClick(waypoint: IItem) {
    navigate("Details", waypoint);
  }

  function createMark(e: IMapPress) {
    const createItem = {
      lat: e.nativeEvent.coordinate.latitude,
      lon: e.nativeEvent.coordinate.longitude,
      name: "Clique",
    };
    setItemToCreate(createItem);
  }

  function toCreateMark() {
    navigate("CreateMark", itemToCreate);
  }

  return (
    <MapView
      style={styles.map}
      initialCamera={{
        center: {
          latitude,
          longitude,
        },
        pitch: 0,
        heading: 0,
        altitude: 1000,
        zoom,
      }}
      onPress={(e) => createMark(e)}
    >
      {wayPoints.length
        ? wayPoints.map((wayPoint, idx) => {
            return (
              <Marker
                key={idx}
                coordinate={{ latitude: wayPoint.lat, longitude: wayPoint.lon }}
                title={wayPoint.name}
                description={wayPoint.name}
                onPress={() => markClick(wayPoint)}
              />
            );
          })
        : null}
      {itemToCreate && (
        <Marker
          coordinate={{
            latitude: itemToCreate.lat,
            longitude: itemToCreate.lon,
          }}
          title={itemToCreate.name}
          description={itemToCreate.name}
          onPress={() => toCreateMark()}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
