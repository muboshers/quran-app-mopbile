import { ParamListBase, useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { HomeScreenStyles } from "./home-screen.styles";

export function HomeScreens() {
  const navigate = useNavigation<any>();

  return (
    <View style={HomeScreenStyles.wrapper}>
      <Text style={HomeScreenStyles.title}>Home Screen is works</Text>

      <Button
        title="Go to detail Sceen"
        onPress={() => navigate.navigate("Details")}
      />
    </View>
  );
}
