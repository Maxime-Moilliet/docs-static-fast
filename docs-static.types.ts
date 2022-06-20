import { IconType } from "react-icons/lib";
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

type DocsStaticConfigNavElementType = {
  name: string;
  to?: string;
  icon?: IconType;
  children?: { name: string; to?: string }[];
};

export type DocsStaticConfigType = {
  bases: DocsStaticConfigBasesType;
  home: {
    banner: DocsStaticConfigBannerType;
    cards?: DocsStaticConfigCardsType[];
  };
  docs: {
    nav: DocsStaticConfigNavElementType[];
  };
};
