"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let discrimenant = b ** 2 - 4 * a * c;

  if( discrimenant < 0 ){
    return arr;
  } else if( discrimenant === 0 ){
    arr.push(-b / (2 * a));
    return arr;
  } else if(discrimenant > 0){
    arr.push((-b + Math.sqrt(discrimenant) )/(2*a));
    arr.push((-b - Math.sqrt(discrimenant) )/(2*a));
    return arr;
  } else{
    throw new Error ('Что-то пошло не так!'); 
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if(!(typeof(percent) === 'number')
          || !(typeof(contribution) === 'number')
          || !(typeof(amount) === 'number')
          || !(typeof(countMonths) === 'number')){
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  }  

  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false; 
  }

  const monthlyPercent = percent / 100 / 12;

  const creditAmount = amount - contribution;

  const monthlyPayment = creditAmount * ( monthlyPercent + ( monthlyPercent / ((( 1 + monthlyPercent ) ** countMonths) - 1 )));

  const fullCredit = monthlyPayment * countMonths; 

  return Number(fullCredit.toFixed(2));
}