import { StyleSheet } from "react-native";
import Colors, { themeOptions } from "../../constants";

export const NavigationStyles = (theme: themeOptions) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      backgroundColor: Colors[theme].themeColor,
      padding: 15,
      justifyContent: "space-between",
    },
    userIcon: {
      marginTop: -40,
      width: 50,
      height: 50,
      backgroundColor: Colors[theme].activeGreen,
      borderRadius: 50,
      textAlignVertical: "center",
      textAlign: "center",
    },
  });
