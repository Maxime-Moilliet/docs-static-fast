import { DocsStaticConfigType } from "docs-static.types";

import { FaBook, FaTools, FaUserAlt } from "react-icons/fa";

const docsStaticConfig: DocsStaticConfigType = {
  bases: {
    theme: "cyan",
  },
  home: {
    banner: {
      title: "Docs static fast",
      content: "Create your custom documentation fast with Docs static fast.",
      button: "Get started !",
    },
    cards: [
      {
        title: "🧙‍ Built-in multi steps",
        content:
          "Multi steps form logic available out of the box! No more pain to build perfect UX for complex forms.",
      },
      {
        title: "✅ Composable validations",
        content:
          "Don't duplicate your logic between display and validation. Validation is enabled only if the field is displayed.",
      },
      {
        title: "💅 Headless, build UX!",
        content:
          "Choose how to render validations, form buttons, and navigation between steps (wizard, tabs, other). It's your choice!",
      },
      {
        title: "📋 Turn everything into fields",
        content:
          "Turn everything into a custom field with full validation! Create forms in React with full validations without the pain.",
      },
      {
        title: "⚛️ Built with Typescript & hooks",
        content:
          "Typescript give you nice types out of the box. Hooks cut the complexity to create custom fields. Use complex logic without even thinking of it.",
      },
      {
        title: "📱 React Native compatible",
        content:
          "Typescript give you nice types out of the box. Hooks cut the complexity to create custom fields. Use complex logic without even thinking of it.",
      },
    ],
  },
  docs: {
    nav: [
      {
        name: "Started",
        to: "/",
        icon: FaTools,
      },
      {
        name: "Install",
        to: "/",
        icon: FaUserAlt,
      },
      {
        name: "Developpement",
        to: "/",
        icon: FaBook,
      },
      {
        name: "Getting started",
        children: [
          {
            name: "Lorem markdownum",
            to: "/getting-started/step-1",
          },
          {
            name: "Moriens est deseruere",
            to: "/getting-started/step-2",
          },
        ],
      },
      {
        name: "Getting started",
        children: [
          {
            name: "Est le faux texte",
            to: "/getting-started/step-1",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
        ],
      },
      {
        name: "Getting started",
        children: [
          {
            name: "Est le faux texte",
            to: "/getting-started/step-1",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Est le faux texte",
            to: "/getting-started/step-1",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Est le faux texte",
            to: "/getting-started/step-1",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
        ],
      },
      {
        name: "Getting started",
        children: [
          {
            name: "Est le faux texte",
            to: "/getting-started/step-1",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
        ],
      },
      {
        name: "Getting started",
        children: [
          {
            name: "Est le faux texte",
            to: "/getting-started/step-1",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
          {
            name: "Page avant impression",
            to: "/getting-started/step-2",
          },
        ],
      },
    ],
  },
};

export default docsStaticConfig;
