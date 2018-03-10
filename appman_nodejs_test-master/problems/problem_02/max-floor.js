const maxFloor = input => {
  let next = 1
  let cur = 0
  while(input > 0){
    if(input < next)
      return cur;
    input -= next
    cur++
    next++
  }
};

module.exports = { maxFloor };
