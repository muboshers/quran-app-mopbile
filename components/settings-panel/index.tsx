import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeContext } from "../../context/ThemeProvider";
import Colors from "../../constants";
import { SettingsPanelStyles } from "./settings-panel.style";

interface SettingsPanelProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

export const SettingsPanel = ({
  isActive,
  setIsActive,
}: SettingsPanelProps) => {
  const { themeValue } = useThemeContext();
  const screenWidth = Dimensions.get("window").width; // Get screen width
  const styles = SettingsPanelStyles(themeValue, isActive, screenWidth);

  return (
    <Modal animationType="slide" visible={isActive}>
      <View
        style={[
          styles.wrapper,
          {
            minWidth: screenWidth,
            minHeight: StatusBar.currentHeight,
          },
        ]}
      >
        <View style={styles.settingsView}>
          <View style={styles.settingsHeader}>
            <Text style={styles.title}>Sozlamalar</Text>

            <TouchableOpacity onPress={() => setIsActive(false)}>
              <FontAwesome
                name="times"
                size={24}
                color={Colors[themeValue].white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
