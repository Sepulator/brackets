module.exports = function check(str, bracketsConfig) {

  // const BRACKETS_PAIR = Object.fromEntries(bracketsConfig.map((value) => value.reverse()));
  const BRACKETS_PAIR = {  ')': '(', ']': '[', '}': '{', '|': '|',
  '2': '1', '4': '3', '6': '5', '7': '7', '8': '8' }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    console.log(BRACKETS_PAIR[currentSymbol]);

    if ((BRACKETS_PAIR[currentSymbol] === topElement) && (stack.length > 0) ) {
      stack.pop();
    } else { stack.push(currentSymbol); }

  }
    return stack.length === 0;
}
