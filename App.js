import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import RootLayout from "./layout/RootLayout";
import MainNavigator from "./navigation/MainNavigator";
import { lightTheme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootLayout>
          <MainNavigator />
        </RootLayout>
      </NavigationContainer>
    </ThemeProvider>
  );
}
