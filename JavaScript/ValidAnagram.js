//
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let newS = s.split('').sort();
    let newT = t.split("").sort();
    for(let i=0; i<=newS.length; i++){
      if(newS[i] !== newT[i]){
          return false;
      }
    }
    return true;
};