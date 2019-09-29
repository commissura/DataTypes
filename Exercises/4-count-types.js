/*
Count different type values in array.

- Prepare array with values of different types, for example:
`[true, 'hello', 5, 12, -200, false, false, 'word']` but preferably
longer and more varied.
- Prepare collection-object (hash) with type names as keys and `0` as values,
for example: `{ number: 0, string: 0, boolean: 0 }`
- Iterate array with `for..of` loop and increment occurrence counter there to
get collection of types occurrences count for all types in array.
- Modify this example: remove all keys from initial collection literal and
add all keys dynamically from the loop.
*/

'use strict';

/*
const countTypesInArray = (arr, hash) => {
  for (const item of arr) {
    hash[typeof item]++;
  }
  return hash;
};

const countTypesInArray2 = (arr, hash) => {
  for (const item of arr) {
    if (hash[typeof item] === undefined) hash[typeof item] = 0;
    hash[typeof item]++;
  }
  return hash;
};
*/

const countTypesInArray = arr => {
  const hash = {};
  for (const item of arr) {
    const type = typeof item;
    if (hash[type] === undefined) hash[type] = 0;
    hash[type]++;
  }
  return hash;
};


module.exports = { countTypesInArray };




