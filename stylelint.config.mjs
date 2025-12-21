/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
    'stylelint-config-recess-order',
  ],
  rules: {},
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.md', '**/*.json', '**/*.yaml', '**/*.xml', '**/*.d.ts'],
}
