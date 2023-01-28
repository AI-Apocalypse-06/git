function noTriples(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (i + 2 <= nums.length) {
      if (nums[i] == nums[i + 1] && nums[i] == nums[i + 2]) {
        return false;
      }
    }
  }
  return true;
}
