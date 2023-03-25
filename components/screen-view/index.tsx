import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "../navigation";
import { ScrollView, View, StatusBar } from "react-native";
import { useThemeContext } from "../../context/ThemeProvider";
import { ScreenViewStyles } from "./screen-view.styles";
import { TopBar } from "../top-bar";

interface ScreenViewProps {
  children: JSX.Element;
}

export function ScreenView({ children }: ScreenViewProps) {
  const { themeValue } = useThemeContext();

  const styles = ScreenViewStyles(themeValue);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar />
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
