import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IItem } from "../contexts/wayPoints";

type IRoutes = {
  Home: undefined;
  WaypointsList: undefined;
  Details: IItem | undefined;
  CreateMark: IItem | undefined;
};

interface IRouteParams {
  route: {
    key: string;
    name: string;
    params: IItem;
  };
}

export { IRouteParams };
export type RoutesType = NativeStackNavigationProp<IRoutes>;
