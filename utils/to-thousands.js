const generatorString = (value) => {
  let i = '';
  for (let index = 0; index < value; index++) {
    i += '0';
  }
  return i;
};

function toThousands(value, toFixed = 2) {
  const splitNum = (Number(value) || 0).toString().split('.') || '';
  let num = splitNum[0];
  let result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  const getSplitNum1 = splitNum[1].substring(0, toFixed);
  return (
    result +
    `${splitNum[1] ? (getSplitNum1 > 0 ? `.${getSplitNum1}` : '') : `.${generatorString(toFixed)}`}`
  );
}

export default toThousands;
