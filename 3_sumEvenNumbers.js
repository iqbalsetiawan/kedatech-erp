function isEven(num) {
  return num % 2 === 0;
}

function sumEvenNumbers(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += sumEvenNumbers(obj[key]);
    } else if (typeof obj[key] === "number" && isEven(obj[key])) {
      sum += obj[key];
    }
  }

  return sum;
}

const example1 = sumEvenNumbers({
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
});
const example2 = sumEvenNumbers({
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
});
console.log(example1); // Expected Output : 6
console.log(example2); // Expected Output : 12
