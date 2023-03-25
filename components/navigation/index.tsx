import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { RootParamsList } from "../../App";
import { useThemeContext } from "../../context/ThemeProvider";
import { NavigationStyles } from "./navigation.styles";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import Colors, { NavigationLabels } from "../../constants";

type ScreensNavigationProp = NativeStackNavigationProp<
  RootParamsList,
  "Footer"
>;

interface OptimizedIconsProps {
  iconType: string;
  name: any;
  color: string;
}

export const Navigation = () => {
  const navigate = useNavigation<ScreensNavigationProp>();
  const { themeValue } = useThemeContext();
  const styles = NavigationStyles(themeValue);

  function OptimizedIcons(props: OptimizedIconsProps) {
    const { iconType, name, color } = props;
    if (iconType === "AntDesign") {
      return <AntDesign name={name} size={24} color={color} />;
    }
    if (iconType === "Entypo") {
      return <Entypo name={name} size={24} color={color} />;
    }
    if (iconType === "FontAwesome") {
      return (
        <FontAwesome
          name={name}
          size={24}
          color={color}
          style={name === "user-o" ? styles.userIcon : {}}
        />
      );
    } else {
      return <Text>Icon not found </Text>;
    }
  }

  return (
    <View style={styles.wrapper}>
      {NavigationLabels.map((nav) => (
        <TouchableOpacity
          key={nav.name}
          onPress={() => navigate.navigate(nav.linkName)}
        >
          <OptimizedIcons
            iconType={nav.iconType}
            name={nav.name}
            color={Colors[themeValue].white}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
