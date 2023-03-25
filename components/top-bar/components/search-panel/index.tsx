import React from "react";
import {
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useThemeContext } from "../../../../context/ThemeProvider";
import { SearchBarStyles } from "./search-panel.style";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Colors from "../../../../constants";

interface SearchPanelProps {
  isActive: boolean;
  setIsActive(isActive: boolean): void;
}

export const SearchPanel = ({ isActive, setIsActive }: SearchPanelProps) => {
  const { themeValue } = useThemeContext();
  const screenWidth = Dimensions.get("window").width; // Get screen width
  const styles = SearchBarStyles(themeValue, screenWidth, isActive);
  const animation = React.useRef(new Animated.Value(0)).current;
  const handlePanelClose = React.useCallback(() => {
    Animated.timing(animation, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsActive(false));
  }, [animation, setIsActive]);
  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: isActive ? 0 : -100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isActive]);
  return (
    <Animated.View
      style={[styles.wrapper, { transform: [{ translateY: animation }] }]}
    >
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Search your surah"
        autoCorrect={false}
        placeholderTextColor={Colors[themeValue].white}
        style={styles.searchPanelInput}
      />
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <AntDesign
            name="search1"
            size={24}
            color={Colors[themeValue].white}
            style={styles.searchPanelIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePanelClose}>
          <FontAwesome
            name="times"
            size={24}
            color={Colors[themeValue].white}
            style={styles.searchPanelIcon}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

