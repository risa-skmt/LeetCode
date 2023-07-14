//Product of Array Except Self
var productExceptSelf = function(nums) {
    let allProduct = nums.reduce((a,b) => a*b);
    console.log(allProduct)
     
    let zero = nums.filter((ele) => ele === 0);
    console.log(zero.length)

    let answer = [];

    if(zero.length >= 2){
        let n=0;
        while(n < nums.length){
            answer.push(0);
            n ++;
        }
    }else if(zero.length === 0){
        return nums.map((ele) => allProduct / ele);
    }else {
        for(let k=0; k<nums.length; k++){
              if(nums[k] !== 0){
                  answer.push(0)
              }else {
                  answer.push(nums.filter((ele) => ele !== 0).reduce((a,b) => a*b));
              }
        }
    }

    return answer

};