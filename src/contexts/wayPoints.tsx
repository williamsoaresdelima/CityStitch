import React, { createContext, useContext } from "react";

type TypeWayPoints = {
  children: React.ReactNode;
};

export interface IItem {
  lon: number;
  lat: number;
  name: string;
}

interface IWayPoints {
  wayPoints: IItem[];
  setWayPoints: (value: IItem[]) => void;
}

const initialValue = {
  wayPoints: [],
  setWayPoints: () => {},
};

export const WayPointsContext = createContext<IWayPoints>(initialValue);

function WayPointsProvider({ children }: TypeWayPoints) {
  const [wayPoints, setWayPoints] = React.useState<IItem[]>(
    initialValue.wayPoints
  );

  return (
    <WayPointsContext.Provider value={{ wayPoints, setWayPoints }}>
      {children}
    </WayPointsContext.Provider>
  );
}

const useWayPoints = () => useContext(WayPointsContext);

export { WayPointsProvider, useWayPoints };
