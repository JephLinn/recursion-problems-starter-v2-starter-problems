/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

const isSorted = (arr, i = 0) => {
  if (arr.length < i) {
    return true
  }

  if (arr.length >= i) {
    if (arr[i + 1] < arr[i]) {
      return false
    };
    return isSorted(arr, i + 1);
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
