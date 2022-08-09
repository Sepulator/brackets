module.exports = function check(str, bracketsConfig) {

str = str.split('');
for (let i = 0; i <= str.length; i++) {
  bracketsConfig.map(value => {
    if (str[i] === value[0] && str[i + 1] === value[1]) {
      str.splice(i, 2);
      i = i - 2;
    }
  });
}

return str.length === 0;

}
