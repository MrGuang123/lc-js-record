// var containsNearbyDuplicate = function (nums, k) {
//   if (nums.length < 2 || k < 0) {
//     return false
//   }

//   const numsObj = nums.reduce((all, num, index) => {
//     all[num] = all[num] || []
//     all[num].push(index)

//     return all
//   }, {})

//   for (key in numsObj) {
//     if (numsObj[key].length < 2) {
//       continue;
//     }

//     const sortNum = numsObj[key].sort()
//     console.log('sortNum', sortNum);
//     let flagValue = Number.MAX_VALUE
//     for (let i = 0; i < sortNum.length - 1; i++) {
//       const absValue = Math.abs(sortNum[i + 1] - sortNum[i])
//       console.log('absValue', absValue);
//       if (absValue < flagValue) {
//         flagValue = absValue
//       }
//     }
//     console.log()
//     if (Math.abs(flagValue) <= k) {
//       return true
//     } else {
//       continue;
//     }
//   }

//   return false
// };

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()
  const length = nums.length

  for (let i = 0; i < length; i++) {
    const num = nums[i]
    if (map.has(num) && i - map.get(num) <= k) {
      return true
    }

    map.set(num, i)
  }

  return false
}

// const result = containsNearbyDuplicate([1, 2, 3, 1], 3)
const result = containsNearbyDuplicate([1, 0, 1, 1], 1)
console.log('result', result)