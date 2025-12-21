import antfu from '@antfu/eslint-config'
import checkFile from 'eslint-plugin-check-file'

export default antfu({
  typescript: true,
  react: true,
  nextjs: true,
  pnpm: true,
  gitignore: true,
  markdown: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  stylistic: true,
  ignores: [
    '.next',
    '.eslintrc-auto-import.mjs',
    'src/components/ui/*.{js,jsx,ts,tsx}',
  ],
}, {
  files: ['src/**/*.{js,jsx,ts,tsx,css,json,html}'],
  plugins: {
    'check-file': checkFile,
  },
  ignores: ['src/components/ui/*.{tsx}'],
  rules: {
    'check-file/no-index': 'off',
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{ts,tsx,js,jsx,css,html,json}': 'KEBAB_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        '{src}/**/': 'KEBAB_CASE',
      },
    ],
  },
})
