// 1.
// console.log(new Set([1, 1, 2, 2, 3, 4]));
// {1, 2, 3, 4}

// 2.
// console.log([...new Set('referee')].join(''));
// ref

// 3. What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// console.log(m);
// {[1,2,3] => true, [1,2,3] => false}

// 4. hasDuplicate:
function hasDuplicate(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}

let hd1 = [1,3,2,1]
let hd2 = [1,5,-1,4]
// console.log(hasDuplicate(hd1)); // true
// console.log(hasDuplicate(hd2)); // false

// 5. vowelCount:
function vowelCount(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const map = new Map();
    for (let char of str) {
      let lowercaseChar = char.toLowerCase();
      if (vowels.has(lowercaseChar)) {
        if (map.has(lowercaseChar)) {
          map.set(lowercaseChar, map.get(lowercaseChar) + 1);
        } else {
          map.set(lowercaseChar, 1);
        }
      }
    }
    return map;
}

console.log(vowelCount("What's up mate?")); // {'a' => 2, 'u' => 1, 'e' => 1}
console.log(vowelCount("Hey. Buddy.")); // {'e' => 1, 'u' => 1}


