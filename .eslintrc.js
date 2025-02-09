module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // ESLint에서 확장할 규칙들을 지정합니다.
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // prettier 관련 설정은 항상 마지막에 위치해야 합니다.
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // 또는 최신 버전 사용: 'latest'
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    // prettier 규칙을 ESLint에서 적용하기 위한 플러그인입니다.
    "prettier",
  ],
  rules: {
    // Prettier 규칙 위반 시 ESLint 에러로 표시합니다.
    "prettier/prettier": "error",
    // 필요한 추가 규칙들을 여기에 작성하세요.
  },
  settings: {
    react: {
      version: "detect", // 설치된 React 버전을 자동으로 감지합니다.
    },
  },
};
