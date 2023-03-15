import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreens, DetailsScreen } from "./screens";
import { get, save } from "./utilities/storage";

export type RootParamsList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootParamsList>();

export default function App() {
  const appearance = useColorScheme();

  const setAppTheme = React.useCallback(async () => {
    const IS_FIRST = await get("IS_FIRST");
    if (IS_FIRST === null && appearance) {
      save("Theme", appearance);
      save("IsDefault", true);
      save("IS_FIRST", true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  return (
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
  );
}
