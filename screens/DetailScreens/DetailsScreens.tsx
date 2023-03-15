import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { DetailsScreenStyles } from "./detail-screens.styles";
import { RootParamsList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenView } from "../../components/screen-view";

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootParamsList,
  "Details"
>;

export function DetailsScreen() {
  const navigate = useNavigation<DetailsScreenNavigationProp>();
  return (
    <ScreenView>
      <View style={DetailsScreenStyles.wrapper}>
        <Text style={DetailsScreenStyles.title}>Details screens works</Text>
        <Button title="Go to back" onPress={() => navigate.goBack()} />
      </View>
    </ScreenView>
  );
}
