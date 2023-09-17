function sortArrayDescending(arr) {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const example = sortArrayDescending([1, 2, 4, 3, 5, 3, 2, 1]);
console.log(example); // Expected Output: [5, 4, 3, 3, 2, 2, 1, 1]
