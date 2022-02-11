module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const length = stack.lenght;

  str = str.split('').map(el => {

    isOpen(el);

    function isOpen(item) {
      for (let el of bracketsConfig) {
        if (el[0] === item && (el[0] !== el[1] || (el[0] === el[1] && (stack[stack.length - 1] !== item || stack.length === 0)))) {
          stack.push(item);
          return;
        }
      }
      isCompare(item);
    }

    function isCompare(item) {
      let ind = 0;
      for (let i = 0; i < bracketsConfig.length; i++) {
        if ((stack[stack.length - 1]) === bracketsConfig[i][0]) ind = i;
      }
      if ((stack.length !== 0) && (item === bracketsConfig[ind][1])) {
        stack.pop();
      } else {
        stack.push(item)
      }
    }

    
  });

  return (stack.length === 0) ? true : false;

}