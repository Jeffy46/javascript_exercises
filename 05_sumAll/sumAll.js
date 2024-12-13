const sumAll = function(num1,num2) {
    let ans=0;
    if(Number.isInteger(num1) && Number.isInteger(num2) && num1+num2>0){
        let lowRange, highRange;
        if(num1<num2){
            lowRange=num1;
            highRange=num2;
        }else{
            lowRange=num2;
            highRange=num1;
        }
        for(let i=lowRange;i<=highRange;i++){
            ans+=i;
        }
    }else{
        return "ERROR";
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
