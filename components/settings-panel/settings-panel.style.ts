import { StyleSheet } from "react-native";
import Colors, { themeOptions } from "../../constants";

export const SettingsPanelStyles = (
  theme: themeOptions,
  isActive: boolean,
  screenWidth: number
) =>
  StyleSheet.create({
    wrapper: {
      position: "absolute",
      zIndex: 1000,
      top: 0,
      bottom: 0,
      right: isActive ? 0 : -(screenWidth * 2),
      backgroundColor: Colors[theme].bgColor,
    },

    settingsView: {
      padding: 15,
      backgroundColor: Colors[theme].themeColor,
    },
    settingsHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors[theme].white,
    },
  });
