const reverseString = function(str) {
    let reversedString="";
    for(let i=str.length-1;i>-1;i--){
        reversedString+=str.substring(i,i+1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
