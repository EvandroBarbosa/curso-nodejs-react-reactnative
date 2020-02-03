module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier" : "error",
    "class-methods-use-this" : "off",//Desabilitando a obrigatoriedade de usar o this na chamada de metodos dentro da class
    "no-param-reassign" : "off", //Desabilitando a impossibilidade de alterar paramentros dentro de metodos
    "camelcase" : "off", //Desabilitando a obrigatoriedade de usar variavel sempre no formato camelcase
    "no-unused-vars" : ["error", {"argsIgnorePattern": "next"}] //Permitindo declarar variavel e não ser obrigado a usar
  },
};
