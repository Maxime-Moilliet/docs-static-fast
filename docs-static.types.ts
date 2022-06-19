import { colors } from "@/theme/foundations/colors";

const colorsKeys = Object.keys(colors);

export type DocsStaticConfigBasesType = {
  theme: typeof colorsKeys;
};

export type DocsStaticConfigBannerType = {
  title: string;
  content: string;
  button: string;
};

export type DocsStaticConfigType = {
  bases: DocsStaticConfigBasesType;
  home: {
    banner: DocsStaticConfigBannerType;
  };
};
