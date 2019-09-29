/*
Implement function containing local variable with hoisting.

- Commit example to github.
- Use eslint to find this problem.
- Fix example manually and commit it to github.
*/

'use strict';

const fn = () => {
//  a++;
  let a = 2;
  return a++;
};

module.exports = { fn };
