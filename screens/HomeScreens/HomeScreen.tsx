import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamsList } from "../../App";
import { ScreenView } from "../../components/screen-view";
import { colorLabels } from "../../constants";
import { useThemeContext } from "../../context/ThemeProvider";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootParamsList,
  "Home"
>;

export function HomeScreens() {
  const navigate = useNavigation<HomeScreenNavigationProp>();
  const { setTheme, themeValue } = useThemeContext();
  const styles = HomeScreenStyles(themeValue);

  return (
    <ScreenView>
      <View>
        <Text style={styles.title}> Something check</Text>
        {colorLabels.map((color) => (
          <Button
            title={color.label}
            onPress={() => setTheme(color.value)}
            key={color.label}
          />
        ))}
      </View>
    </ScreenView>
  );
}
