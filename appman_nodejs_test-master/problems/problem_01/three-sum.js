const threeSum = (nums, target) => {
  let allArr = []
  let temp = []
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      for (var k = j + 1; k < nums.length; k++) {
        temp.push(i,j,k);
        allArr.push(temp);
        temp = []
      }
    }
  }
  // console.log(allArr.filter(
  //   x => nums[x[0]]+nums[x[1]]+nums[x[2]] == target
  // ))
  return allArr.filter(
    x => nums[x[0]]+nums[x[1]]+nums[x[2]] == target
  )
};

module.exports = { threeSum };

const inputArr = [5, 4, 3, 2, 1, 0]
const target = 5
threeSum(inputArr,target);
