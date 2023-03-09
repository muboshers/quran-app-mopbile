import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
export const HomeScreenStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS["dark"].mainColor,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 33,
    color: COLORS["dark"].textColor,
  },
});
