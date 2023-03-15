import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenViewProps {
  children: JSX.Element;
}

export function ScreenView({ children }: ScreenViewProps) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
