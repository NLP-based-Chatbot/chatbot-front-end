const config = {
    verbose: true,
    transform:{
    "\\.[jt]sx?$": "babel-jest",
    '^.+\\.(ts|tsx)?$': 'ts-jest'},
    reporters: [
      "default",
      "jest-html-reporters"
    ],
    coveragePathIgnorePatterns: ["<rootDir>/src/api/modules", "<rootDir>/src/components/Complaints", "<rootDir>/src/helpers" ]
  };
  
module.exports = config;