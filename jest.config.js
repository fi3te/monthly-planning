module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePathIgnorePatterns: ['<rootDir>/.angular/'],
  // ESM in node_modules (@jsverse/transloco deps, etc.): let Jest transform them (same idea as .mjs in preset).
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@angular/common/locales/.*\\.js$|flat/|@jsverse/))',
  ],
};
