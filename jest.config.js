module.exports = {
  rootDir: 'src',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      'tsConfig': 'tsconfig.test.json',
    },
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
