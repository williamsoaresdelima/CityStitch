import { WayPointsProvider } from "./src/contexts/wayPoints";
import Routes from "./src/routes";
import { LocationProvider } from "./src/contexts/location";
import { ThemeProvider } from "styled-components";
import theme from "./src/assets/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WayPointsProvider>
        <LocationProvider>
          <Routes />
        </LocationProvider>
      </WayPointsProvider>
    </ThemeProvider>
  );
}
