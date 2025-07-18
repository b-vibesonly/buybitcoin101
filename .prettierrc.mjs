/** @type {import("prettier").Config} */
export default {
  // Basic formatting
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  // Plugin configurations
  plugins: ['prettier-plugin-astro'],

  // File-specific overrides
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.json', '*.md'],
      options: {
        useTabs: false,
      },
    },
  ],
};
