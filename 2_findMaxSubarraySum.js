function findMaxSubarraySum(arr, length) {
  if (length > arr.length) {
    return null;
  }

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }
  currentSum = maxSum;

  for (let i = length; i < arr.length; i++) {
    currentSum = currentSum - arr[i - length] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const example1 = findMaxSubarraySum(([100, 200, 300, 400], 2));
const example2 = findMaxSubarraySum(([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
const example3 = findMaxSubarraySum(([-3, 4, 0, -2, 6, -1], 2));
console.log(example1); // Expected Output : 700
console.log(example2); // Expected Output : 39
console.log(example3); // Expected Output : 5
