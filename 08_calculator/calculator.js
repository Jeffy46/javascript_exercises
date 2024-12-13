const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(numbersToAdd) {
	const arr = numbersToAdd;
  let sum=0;
  for(num of arr){
    sum+=num;
  }
  return sum;
};

const multiply = function(numbersToMultiply) {
  const arr=numbersToMultiply;
  let product=1;
  for(num of arr){
    product*=num;
  }
  return product;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
	let product=1;
  for(let i=num;i>=1;i--){
    product*=i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
