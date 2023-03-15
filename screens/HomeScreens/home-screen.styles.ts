import { StyleSheet } from "react-native";
import Colors, { themeOptions } from "../../constants";

export const HomeScreenStyles = (theme: themeOptions) =>
  StyleSheet.create({
    title: {
      color: Colors[theme].white,
      backgroundColor: Colors[theme].themeColor,
    },
  });
