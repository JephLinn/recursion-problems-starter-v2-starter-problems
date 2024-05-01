/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
  if (nums.length < 1) {
    return sorted
  }
  if (nums.length > 0) {
    let num = smallest(nums);
    
    sorted.push(num);

    nums.splice(nums.indexOf(num), 1);

    return sort(nums, sorted)
  }


}

const smallest = nums => {
  let tiny = undefined
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (tiny === undefined || tiny > num) {
      tiny = num;
    }
  }

  return tiny
}

// const popper = (nums, num) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === num) {
//       nums.splice(i, 1);
//       return nums
//     }
//   }
// }

console.log(smallest([0, 1, -3, -10, 16, -400, 36]))

console.log(sort([4,1,6,3,1,7]))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
