import { StyleSheet } from "react-native";
import Colors, { themeOptions } from "../../constants";

export const TopBarStyles = (theme: themeOptions) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      backgroundColor: Colors[theme].themeColor,
      padding: 15,
      justifyContent: "space-between",
      position: "relative",
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
      color: Colors[theme].white,
    },

    iconWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
