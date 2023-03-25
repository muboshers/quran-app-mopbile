import React, { useState } from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import { TopBarStyles } from "./top-bar.styles";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useThemeContext } from "../../context/ThemeProvider";
import Colors from "../../constants";
import { SearchPanel } from "./components/search-panel";

export const TopBar = () => {
  const { themeValue } = useThemeContext();
  const styles = TopBarStyles(themeValue);
  const [isActive, setIsActive] = useState(false);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Nur Ul-Islam</Text>
      <View style={styles.iconWrapper}>
        <TouchableOpacity
          style={{
            marginRight: 12,
          }}
          onPress={() => setIsActive(true)}
        >
          <AntDesign
            name="search1"
            size={24}
            color={Colors[themeValue].white}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="settings" size={24} color={Colors[themeValue].white} />
        </TouchableOpacity>
      </View>
      <SearchPanel isActive={isActive} setIsActive={setIsActive} />
    </View>
  );
};
