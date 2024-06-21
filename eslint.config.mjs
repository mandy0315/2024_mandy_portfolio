// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/vue/rules', {
    rules: {
      'vue/no-v-html': 'off',
    }
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      "@typescript-eslint/no-this-alias": "off"
    }
  })
