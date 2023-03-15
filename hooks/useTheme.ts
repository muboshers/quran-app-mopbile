import React from "react";
import { useColorScheme } from "react-native";
import { themeOptions } from "../constants";
import { get, save } from "../utilities/storage";

export const useTheme = () => {
  const [themeValue, setThemeValue] = React.useState<themeOptions>("light");
  const [initialValue, setInitialValue] = React.useState(0);
  const themes = useColorScheme();
  const themeOperations = (theme: string) => {
    switch (theme) {
      case "dark":
        setTheme(theme, false);
        setInitialValue(2);
        return;
      case "light":
        setTheme(theme, false);
        setInitialValue(1);
        return;
      case "default":
        if (themes) setTheme(themes, true);
        setInitialValue(3);
        return;
    }
  };

  const getAppTheme = React.useCallback(async () => {
    const theme = await get("Theme");
    const isDefault = await get("IsDefault");
    isDefault ? themeOperations("default") : themeOperations(theme);
  }, []);

  const setTheme = React.useCallback(
    async (theme: themeOptions, isDefault: any) => {
      save("Theme", theme);
      save("IsDefault", isDefault);
      setThemeValue(theme);
    },
    []
  );

  React.useEffect(() => {
    getAppTheme();
  }, [getAppTheme]);

  return {
    themeOperations,
    themeValue,
  };
};
