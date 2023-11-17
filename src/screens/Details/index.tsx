import { View } from "react-native";
import React from "react";

import WayPointForm from "../../components/WayPointForm";
import { ParamListBase } from "@react-navigation/native";
import { IRouteParams } from "../../routes/IRoutes";

function Details(props: ParamListBase) {
  const { route } = props as unknown as IRouteParams;

  return (
    <View>
      <WayPointForm isEdit={false} objectToView={route.params} />
    </View>
  );
}

export default Details;
