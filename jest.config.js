module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*spec.(ts|tsx)'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
