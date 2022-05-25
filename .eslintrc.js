module.exports={
  "extends": [
      "yayajing",
      "plugin:@typescript-eslint/recommended"
  ],
  "parser": "typescript-eslint-parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
      "eqeqeq":"off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-template-curly-in-string": "off"
  }
}