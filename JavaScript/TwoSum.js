var twoSum = function(nums, target) {
    let answer = [];
    for(let i=0; i<=nums.length-2; i++){
        let A = nums[i];
        let B = target - A;
        for(let k=i+1; k<=nums.length-1;k++){
          if(nums[k] === B){
              answer.push(i);
              answer.push(k);
              return answer;
          }
        }
    }
};