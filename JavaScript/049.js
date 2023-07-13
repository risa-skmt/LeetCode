//solved
var groupAnagrams = function(strs) {
    let obj = {};
    for(let str of strs){
       let letters = str.split("").sort().join("");
       obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
       //console.log(obj);
    }
    return Object.values(obj);
};





//runtime over
var groupAnagrams = function(strs) {
    let newStrs = [];
    strs.map(a => {
        newStrs.push(a.split('').sort());
    })
    
   let answer = [];
   let index = [];
   let A = null;
   for(let i=0; i<=newStrs.length-1; i++){
       if(index.includes(i)){
           continue;
       }
       let pair = [];
       A = newStrs[i].join();
       index.push(i);
       pair.push(strs[i]);

       for(let k=i+1; k<=newStrs.length-1; k++){
           if(newStrs[k].join() === A){
               pair.push(strs[k]);
               index.push(k);
           }
       }

       answer.push(pair);
       pair = [];
   }
    return answer;
};