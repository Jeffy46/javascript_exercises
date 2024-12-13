const getTheTitles = function(array) {
    const ans=[];
    for(item of array){
        ans.push(item.title);
    }
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
