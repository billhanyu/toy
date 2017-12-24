module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "codeFrame": false,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "linebreak-style": 0
  },
  "plugins" :[
    "react"
  ],
  "extends": [
    "google",
    "plugin:react/recommended"
  ]
};
