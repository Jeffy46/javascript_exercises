const findTheOldest = function(array) {
    let biggestDif = 0;
    let oldestPersonIndex;
    for(let i=0;i<array.length;i++){
        if(array[i].yearOfDeath==null){
            let d = new Date();
            array[i].yearOfDeath=d.getFullYear()
        }
        let dif=array[i].yearOfDeath-array[i].yearOfBirth;
            if(dif>biggestDif){
                oldestPersonIndex=i;
                biggestDif=dif;
            }
    }
    return array[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
