const fibonacci = function(num) {
    number = parseInt(num);
    if(number==0){
        return 0;
    }
    if(number < 0){
        return "OOPS"
    }
    let first=1;
    let second=1;
    for(let i=1; i < number;i++){
        temp = second;
        second=first+second;
        first=temp;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;
