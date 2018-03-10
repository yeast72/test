const minStep = input => {
  numP = oddPlus(input)
  numS = oddMinus(input)

  return Math.min(numS,numP)
};

module.exports = { minStep };

const isEven = num => num % 2 == 0

const oddPlus = num => {
  let step = 0
  while(num !== 1){
    if(isEven(num)) num /= 2
    else num += 1
    step++
  }
  return step;
}

const oddMinus = num => {
  let step = 0
  while(num !== 1){
    if(isEven(num)) num /= 2
    else num -= 1
    step++
  }
  return step;
}
minStep(5)
