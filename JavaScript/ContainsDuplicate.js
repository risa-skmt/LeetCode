//1
var containsDuplicate = function(nums) {
    for(let i=0; i<=nums.length-2; i++){
        let search = nums[i];
        for(let k=i+1; k<=nums.length-1; k++){
            if(search === nums[k]){
                return true;
            }
        }
    } return false;
};


//2
var containsDuplicate = function(nums) {
    let check = [];
    for(let i=0; i<=nums.length-1; i++){
        if(check.includes(nums[i])){
            return true;
        }else {
            check.push(nums[i]);
        }
    }
    return false;
 };