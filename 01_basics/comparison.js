// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// JS tries to convert both sides to numbers (unless both are strings — then it does lexical comparison, like dictionary order).
console.log("2" > 1)
console.log(Number("2"));   // 2
console.log("2" > 1);       // true  → "2" → 2 → 2 > 1
console.log("10" < "2");    // true? ❌ false! (string compare)
console.log(Number("10") < 2); // true
