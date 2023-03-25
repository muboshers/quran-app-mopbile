import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreens, DetailsScreen } from "./screens";
import { get, save } from "./utilities/storage";
import { ThemeContextProvider } from "./context/ThemeProvider";

export type RootParamsList = {
  Home: undefined;
  Details: undefined;
  SharedHadis: undefined;
  Profile: undefined;
  SavedSurahs: undefined;
  Footer: undefined;
};

const Stack = createNativeStackNavigator<RootParamsList>();

export default function App() {
  return (
    <ThemeContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeContextProvider>
  );
}
