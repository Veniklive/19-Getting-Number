/** A function that prints to the console a string describing how to obtain a given number using mathematical operations on the number "1".
 * @param {Number} desireNum - The desired number.
 * @returns {String} Number to calculate factorial.
 */

function getNumber(desireNum, processedNum = 1, sequence = "1") {
  if (!Number.isInteger(desireNum) || desireNum < 0) return null;
  if (processedNum === desireNum) return `"${desireNum}": ${sequence}`;
  if (processedNum > desireNum) return null;

  return (
    getNumber(desireNum, processedNum * 3, `(${sequence} * 3)`) ||
    getNumber(desireNum, processedNum + 5, `(${sequence} + 5)`) ||
    null
  );
}

console.log(getNumber(13)); // "13": (((1 * 3) + 5) + 5)
console.log(getNumber(19)); // "19": ((((1 * 3) * 3) + 5) + 5)
console.log(getNumber(2)); // null
console.log(getNumber(-1)); // null
