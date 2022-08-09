module.exports = function check(str, bracketsConfig) {

  const BRACKETS_PAIR = Object.fromEntries(bracketsConfig.map((value) => value.reverse()));

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if ((BRACKETS_PAIR[currentSymbol] === topElement) && (stack.length > 0) ) {
      stack.pop();
    } else {
      stack.push(currentSymbol);
      }
    }
    return stack.length === 0;
}
