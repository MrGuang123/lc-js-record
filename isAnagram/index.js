// t是s的异位词标识两个字符串排序后相等
// 时间复杂度：O(nlogn)，其中n为s的长度。排序的时间复杂度为O(nlogn)，
// 比较两个字符串是否相等时间复杂度为O(n)，
// 因此总体时间复杂度为O(nlogn+n)=O(nlogn)。
var isAnagramStr = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  return s.split('').sort().join() === t.split('').sort().join()
};

// LeetCode官方题解：
// 异位词等价于「两个字符串中字符出现的种类和次数均相等」。由于字符串只包含26个小写字母，
// 因此我们可以维护一个长度为26的频次数组，先遍历记录s出现的次数，然后遍历t，减去数组中对应的频次，
// 如果出现数组某个位置小于0，则说明两个字符串不一致，返回false即可。
// 时间复杂度：O(n)，其中n为s的长度。
// 空间复杂度：O(S)，其中S为字符集大小，此处 S=26。
var isAnagramHashTable = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
  }
  for (let i = 0; i < t.length; ++i) {
    table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
    if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};

// 时间复杂度：O(n),n为字符串s长度,三次遍历，复杂度不计算常数
// 空间复杂度：O(n)
var isAnagramMap = function (s, t) {
  if (s.length !== t.length) return false
  let a = new Map()
  let b = new Map()
  s.split('').forEach(item => {
    const num = a.has(item) ? a.get(item) + 1 : 1
    a.set(item, num)
  })
  t.split('').forEach(item => {
    b.set(item, b.has(item) ? b.get(item) + 1 : 1)
  })

  for (let key of a) {
    if (a.get(key[0]) !== b.get(key[0])) {
      return false
    }
  }
  return true
}