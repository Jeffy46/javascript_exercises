const removeFromArray = function(array, ...args) {
    const arr = [];
    for(let item of array){
        if(!args.includes(item)){
            arr.push(item);
        }
    }
    return arr;
};
module.exports = removeFromArray;
