import { StyleSheet } from "react-native";
import Colors, { themeOptions } from "../../../../constants";

export const SearchBarStyles = (
  theme: themeOptions,
  screenWidth: number,
  isActive: boolean
) =>
  StyleSheet.create({
    wrapper: {
      top: isActive ? 0 : -100,
      position: "absolute",
      width: screenWidth,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: Colors[theme].themeColor,
      zIndex: 100,
    },

    searchPanelInput: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 220,
      borderRadius: 5,
      borderColor: Colors[theme].white,
      color: Colors[theme].white,
      textDecorationColor: "transparent",
      textDecorationLine: "none",
    },

    iconWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },

    searchPanelIcon: {
      marginRight: 15,
    },
  });
