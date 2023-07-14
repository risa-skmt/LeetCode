//Valid Parentheses
var isValid = function(s) {
    let arr = s.split("");

    if(arr.length%2 !== 0){
        return false;
    }
    
    let obj = {};
    let store = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "(" || arr[i] === "{" || arr[i] === "["){
            store.push(arr[i]);
            if(obj.hasOwnProperty(arr[i])){
                obj[arr[i]] = obj[arr[i]] +1;
            }else {
                obj[arr[i]] = 1;
            }
        }else{
            if(arr[i] === ")" && store[store.length-1] === "("){
                store.pop();
                obj["("] = obj["("] -1;
            }else if(arr[i] === "}" && store[store.length-1] === "{"){
                store.pop();
                obj["{"] = obj["{"] -1;
            }else if(arr[i] === "]" && store[store.length-1] === "["){
                store.pop();
                obj["["] = obj["["] -1;
            }else {
                return false;
            }
        }
    }
    console.log(obj)
    if(Object.values(obj).reduce((a,b) => a+b) !== 0){
        return false;
    }
    if(store.length === 0){
        return true;
    }

    
};