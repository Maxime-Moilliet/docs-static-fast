import { DocsStaticConfigType } from "docs-static.types";

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
};

export default docsStaticConfig;
