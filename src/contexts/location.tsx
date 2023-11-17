import React, { createContext, useContext } from "react";
import { IItem } from "./wayPoints";

type TypeLocation = {
  children: React.ReactNode;
};

interface ILocation {
  location: IItem;
  setLocation: (value: IItem) => void;
}

const initialValue = {
  location: { name: "Sua Posição", lat: 0, lon: 0 },
  setLocation: () => {},
};

export const LocationContext = createContext<ILocation>(initialValue);

function LocationProvider({ children }: TypeLocation) {
  const [location, setLocation] = React.useState<IItem>(initialValue.location);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

const useLocation = () => useContext(LocationContext);

export { LocationProvider, useLocation };
