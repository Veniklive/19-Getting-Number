/** A function that prints to the console a string describing how to obtain a given number using mathematical operations on the number "1".
 * @param {Number} a - The desired number.
 * @returns {String} Number to calculate factorial.
 */

function getNumber(a) {
  if (!Number.isInteger(a) || a < 0) return null;
  let result = null;

  function algoritm(b, sequence) {
    if (b === a) {
      result = `"${a}": ${sequence}`;
      return;
    }
    if (b > a) {
      return;
    }
    algoritm(b * 3, `(${sequence} * 3)`);
    algoritm(b + 5, `(${sequence} + 5)`);
  }

  algoritm(1, "1");
  return result;
}
console.log(getNumber(13)); // "13": (((1 * 3) + 5) + 5)
console.log(getNumber(19)); // "19": ((((1 * 3) * 3) + 5) + 5)
console.log(getNumber(2)); // null
console.log(getNumber(-1)); // null
