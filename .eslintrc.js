module.exports = {
  env: {
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md#javascript-standard-style
  extends: 'standard',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2015
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      }
    ],
    'no-console': 'off',
    'no-global-assign': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // 在块级作用域外访问块内定义的变量是否报错提示  
    "block-scoped-var": 0,  
    // if while function 后面的{必须与if在同一行，java风格。  
    "brace-style": [2, "1tbs", { "allowSingleLine": true }], 
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，  
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号  
    "comma-dangle": [2, "never"]
  }
}