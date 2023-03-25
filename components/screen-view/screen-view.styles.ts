import { StyleSheet } from "react-native";
import Colors, { themeOptions } from "../../constants";

export const ScreenViewStyles = (theme: themeOptions) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: Colors[theme].bgColor,
    },
  });
