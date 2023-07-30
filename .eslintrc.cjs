module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    "vue/component-tags-order": ["error", {
      "order": [ "script", "template", "style" ]
    }]
  },
};
