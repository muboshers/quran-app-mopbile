import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { DetailsScreenStyles } from "./detail-screens.styles";
export function DetailsScreen() {
  const navigate = useNavigation<any>();

  return (
    <View style={DetailsScreenStyles.wrapper}>
      <Text style={DetailsScreenStyles.title}>Details screens works</Text>
      <Button title="Go to back" onPress={() => navigate.goBack()} />
    </View>
  );
}
