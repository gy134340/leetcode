/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const merge = nums1.concat(nums2)
  const len = merge.length

  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr
    }
    let left = [], right = []
    const pivot = arr.splice(arr.length >> 1, 1)[0]
    for (let item of arr) {
      if (item < pivot) {
        left.push(item)
      } else {
        right.push(item)
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
  }

  const res = quickSort(merge)
  const center = len >> 1
  const isOdd = len % 2 === 0
  return !isOdd ? res[center] : (res[center - 1] + res[center]) / 2
};
// @lc code=end

