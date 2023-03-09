import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
export const DetailsScreenStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS["white"].mainColor,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 33,
    color: COLORS["white"].textColor,
  },
});
