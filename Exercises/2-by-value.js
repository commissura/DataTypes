/*
Prepare two implementations of `inc` function:

2. First with signature `inc(n: number): number`,
call example: `const a = 5; const b = inc(a); console.dir({ a, b });`
*/

'use strict';

const inc = a => ++a;

module.exports = { inc };
