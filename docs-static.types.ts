import { colors } from "@/theme/foundations/colors";

export type DocsStaticConfigBasesType = {
  theme: keyof typeof colors;
};

export type DocsStaticConfigBannerType = {
  title: string;
  content: string;
  button: string;
};

export type DocsStaticConfigCardsType = {
  title: string;
  content: string;
};

export type DocsStaticConfigType = {
  bases: DocsStaticConfigBasesType;
  home: {
    banner: DocsStaticConfigBannerType;
    cards?: DocsStaticConfigCardsType[];
  };
};
