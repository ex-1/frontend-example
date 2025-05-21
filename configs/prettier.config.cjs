module.exports = {
  semi: false,
  tabWidth: 2,
  useTabs: true,

  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "avoid",

  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: false,
  printWidth: 90,

  plugins: ["@trivago/prettier-plugin-sort-imports"],

  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/shared/icons/(.*)$",

    "^@/app/(.*)$",
    "^@/pages/(.*)$",
    "^@/widgets/(.*)$",
    "^@/features/(.*)$",
    "^@/entities/(.*)$",
    "^@/shared/(.*)$",
    "^[./]",
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
