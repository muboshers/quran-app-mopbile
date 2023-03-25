import React, { createContext, useContext } from "react";

import { useColorScheme } from "react-native";
import { themeOptions } from "../constants";
import { get, save } from "../utilities/storage";

interface ThemeContextType {
  themeValue: themeOptions;
  setTheme: (theme: themeOptions) => Promise<void>;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  themeValue: "light",
  setTheme: function (theme: themeOptions): Promise<void> {
    throw new Error("Function not implemented.");
  },
});

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [themeValue, setThemeValue] = React.useState<themeOptions>("light");
  const [initialValue, setInitialValue] = React.useState(0);
  const themes = useColorScheme();
  const themeOperations = (theme: string) => {
    switch (theme) {
      case "dark":
        setTheme(theme);
        setInitialValue(2);
        return;
      case "light":
        setTheme(theme);
        setInitialValue(1);
        return;
    }
  };

  const getAppTheme = React.useCallback(async () => {
    const theme = await get("Theme");
    themeOperations(theme);
  }, []);

  const setTheme = React.useCallback(async (theme: themeOptions) => {
    save("Theme", theme);
    setThemeValue(theme);
  }, []);

  React.useEffect(() => {
    getAppTheme();
  }, [getAppTheme]);

  return (
    <ThemeContext.Provider
      value={{
        themeValue,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
