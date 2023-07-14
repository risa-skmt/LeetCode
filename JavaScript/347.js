//Top K Frequent Elements
var topKFrequent = function(nums, k) {
    let obj = {};
    for(let num of nums){
        obj[num] ? obj[num] = obj[num]+1 : obj[num] = 1
    }
    let arr = Object.entries(obj).map(([key, value]) => ({key, value}))

    arr.sort((a, b) => b.value - a.value)


    let answer = [];
    for(let i=0; i<k; i++){
        answer.push(arr[i]["key"]);
    }
    return answer.map(Number);
    
};