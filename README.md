# JestjsPractice
some useful link:
home page for jest: https://jestjs.io
Globals api: https://jestjs.io/docs/en/api#methods
expect api: https://jestjs.io/docs/en/expect
mock api: https://jestjs.io/docs/en/mock-function-api#mockfnmockcalls
https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest
----------------------------------------------
How to manager this Repository?
install package.json: npm init  -yes  (compare the file with i used before and make it same as that)
-------
copy the .eslint.js: cd respository used before 
                     la -ls
                     cp .eslint.js folderName
-------
test eslints: create a new file in test folder with:
module.exports = {
    env: {
        jest: true
    }
}
-------
install jest: npm install --save-dev jest
              npm install jest --global
              npm add --dev babel-jest @babel/core @babel/preset-env
---
create a babel.config.js file with:
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

