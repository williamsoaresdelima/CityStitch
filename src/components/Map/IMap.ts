import { IItem } from "../../contexts/wayPoints";

interface IMap {
  item?: IItem;
}

interface IMapPress {
  nativeEvent: {
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
}

export { IMap, IMapPress };
