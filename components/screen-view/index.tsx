import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "../navigation";
import { ScrollView, View, StatusBar } from "react-native";
import { useThemeContext } from "../../context/ThemeProvider";
import { ScreenViewStyles } from "./screen-view.styles";
import { TopBar } from "../top-bar";
import { SettingsPanel } from "../settings-panel";

interface ScreenViewProps {
  children: JSX.Element;
}

export function ScreenView({ children }: ScreenViewProps) {
  const { themeValue } = useThemeContext();

  const styles = ScreenViewStyles(themeValue);

  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar setIsSettings={setIsActive} />
      <SettingsPanel isActive={isActive} setIsActive={setIsActive} />
      <View style={{ flex: 1 }}>
        <ScrollView
          style={[
            {
              minHeight: StatusBar.currentHeight,
              flex: 1,
            },
            styles.wrapper,
          ]}
        >
          {children}
        </ScrollView>
      </View>
      <Navigation />
    </SafeAreaView>
  );
}
