import React from "react";
import { ParamListBase } from "@react-navigation/native";
import { View } from "react-native";

import { IRouteParams } from "../../routes/IRoutes";
import WayPointForm from "../../components/WayPointForm";

export function CreateMark(props: ParamListBase) {
  const { route } = props as unknown as IRouteParams;
  return (
    <View>
      {route ? (
        <WayPointForm isEdit={true} objectToView={route.params} />
      ) : (
        <WayPointForm isEdit={true} />
      )}
    </View>
  );
}

export default CreateMark;
