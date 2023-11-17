import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import WaypointsList from "../screens/WaypointsList";
import Details from "../screens/Details";
import CreateMark from "../screens/CreateMark";
import HeaderTitle from "../components/HeaderTitle";
import theme from "../assets/global/styles/theme";

const Stack = createNativeStackNavigator();

const DefaultHeaderOptions = {
  headerStyle: {
    backgroundColor: theme.colors.mediumGray,
    color: theme.colors.white,
  },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...DefaultHeaderOptions,
            headerTitle: () => <HeaderTitle title={"City Stitch"} />,
            headerRight: () => <Entypo name="home" size={24} color="white" />,
          }}
        />
        <Stack.Screen
          name="WaypointsList"
          component={WaypointsList}
          options={{
            ...DefaultHeaderOptions,
            headerTitle: () => <HeaderTitle title={"Lista de Marcadores"} />,
          }}
        />
        <Stack.Screen
          name="Details"
          initialParams={undefined}
          component={Details}
          options={{
            ...DefaultHeaderOptions,
            headerTitle: () => <HeaderTitle title={"Visualizar Marcador"} />,
          }}
        />
        <Stack.Screen
          name="CreateMark"
          initialParams={undefined}
          component={CreateMark}
          options={{
            ...DefaultHeaderOptions,
            headerTitle: () => <HeaderTitle title={"Editando Marcador"} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
