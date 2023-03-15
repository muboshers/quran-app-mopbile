const commonColor = {
  commonWhite: "#FFFFFF",
  commonBlack: "#000000",
  activeColor: "#DE5E69",
  deactiveColor: "#DE5E6950",
  boxActiveColor: "#DE5E6940",
};

const light = {
  themeColor: "#FFFFFF",
  white: "#000000",
  sky: "#DE5E69",
  gray: "gray",
  ...commonColor,
};

const dark = {
  themeColor: "#000000",
  white: "#FFFFFF",
  sky: "#831a23",
  gray: "white",
  ...commonColor,
};

export const colorLabels = [
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "Light",
    value: "light",
  },
];

export type themeOptions = "dark" | "light";

const Colors = { light, dark };

export default Colors;
