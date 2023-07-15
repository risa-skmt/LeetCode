//Find Minimum in Rotated Sorted Array
var findMin = function(nums) {
    let left = 0;
   let right = nums.length - 1;

   while (left < right) {
       let mid = left + Math.floor((right - left) / 2);

       if (nums[mid] > nums[right]) {
           left = mid + 1;
       } else {
           right = mid;
       }
   }
   return nums[left];
};



//left + (right - left)/2 を (right + left)/2としてしまうと、(right + left)がintの上限を超えてタイムオーバーになるor正確性がなくなるので避けた方が良い
//left + Math.floor((right - left) / 2);の順番で！！