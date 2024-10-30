module.exports = {
  parser: '@typescript-eslint/parser', // TypeScript 파서 사용
  parserOptions: {
    ecmaVersion: 2020, // 최신 ECMAScript 표준
    sourceType: 'module', // 모듈 사용
    ecmaFeatures: {
      jsx: true, // JSX 사용
    },
    project: './tsconfig.json', // TypeScript 설정 파일 경로
  },
  settings: {
    react: {
      version: 'detect', // React 버전을 자동으로 감지
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React 관련 권장 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 관련 권장 규칙
    'plugin:react-hooks/recommended', // React Hooks 규칙
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    // 기존 규칙
    'no-console': 'warn',
    'semi': ['error', 'always'],
    
    // React 관련 규칙
    'react/prop-types': 'off', // TypeScript를 사용할 때는 PropTypes 불필요

    // TypeScript 관련 규칙
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // 추가적인 팀 규칙
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // TypeScript 파일에 적용
      rules: {
        // TypeScript 파일에만 적용되는 규칙 추가 가능
      },
    },
  ],
};
