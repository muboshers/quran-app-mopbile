const commonColor = {
  commonWhite: "#FFFFFF",
  commonBlack: "#000000",
  activeColor: "#DE5E69",
  deactiveColor: "#DE5E6950",
  boxActiveColor: "#DE5E6940",
  activeGreen: "#00AC6A",
};

const light = {
  themeColor: "#ECECEC",
  white: "#214966",
  bgColor: "#FFFBEB",
  sky: "#DE5E69",
  gray: "gray",
  ...commonColor,
};

const dark = {
  themeColor: "#262627",
  bgColor: "#4D4D4D",
  white: "#FFFFFF",
  sky: "#831a23",
  gray: "white",
  ...commonColor,
};

export const colorLabels: {
  label: string;
  value: "dark" | "light";
}[] = [
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "Light",
    value: "light",
  },
];

export type themeOptions = "light" | "dark";

const Colors = { light, dark };

export const NavigationLabels: {
  iconType: string;
  name: string;
  linkName: "Home" | "Details" | "Profile" | "SavedSurahs" | "SharedHadis";
}[] = [
  {
    iconType: "AntDesign",
    name: "home",
    linkName: "Home",
  },
  {
    iconType: "Entypo",
    name: "book",
    linkName: "Details",
  },
  {
    iconType: "FontAwesome",
    name: "user-o",
    linkName: "Profile",
  },
  {
    iconType: "Entypo",
    name: "bookmark",
    linkName: "SavedSurahs",
  },
  {
    iconType: "AntDesign",
    name: "sharealt",
    linkName: "SharedHadis",
  },
];

export default Colors;
