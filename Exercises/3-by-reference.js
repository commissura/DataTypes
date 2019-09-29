/*
Prepare two implementations of `inc` function:

3. Second with signature `inc(num: Num)` where `Num` is object with field `n`,
so function will change field of the object passed by reference,
call example: `const obj = { n: 5 }; inc(obj); console.dir(obj);`
*/

'use strict';

const inc = num => {
  num.n += 1;
};

module.exports = { inc };
