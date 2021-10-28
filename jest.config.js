const config = {
    verbose: true,
    transform:{
    "\\.[jt]sx?$": "babel-jest",
    '^.+\\.(ts|tsx)?$': 'ts-jest'},
    reporters: [
      "default",
      "jest-html-reporters"
    ],
    coveragePathIgnorePatterns: ["helpers/GraphDivider.js",
                                  "api/modules/feedback.js",
                                  "api/modules/user.js",
                                  "views/helpers",
                                  "views/chatbot",
                                  "views/dashboard",
                                  "views/register"]
  };
  
module.exports = config;