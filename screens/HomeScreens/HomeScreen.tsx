import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, useColorScheme, StyleSheet } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamsList } from "../../App";
import { ScreenView } from "../../components/screen-view";
import { useTheme } from "../../hooks/useTheme";
import { colorLabels } from "../../constants";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootParamsList,
  "Home"
>;

export function HomeScreens() {
  const navigate = useNavigation<HomeScreenNavigationProp>();
  const { themeOperations, themeValue } = useTheme();
  const styles = HomeScreenStyles(themeValue);

  return (
    <ScreenView>
      <View>
        <Text style={styles.title}> Something check</Text>
        {colorLabels.map((color) => (
          <Button
            title={color.label}
            onPress={() => themeOperations(color.value)}
            key={color.label}
          />
        ))}
      </View>
    </ScreenView>
  );
}
