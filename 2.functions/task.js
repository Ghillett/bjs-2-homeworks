function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let avg = 0;

  let sum = 0;

  for(let i = 0; i < arr.length; i++){

    sum += arr[i];

    if(min > arr[i]){
      min = arr[i];
    }

    if(max < arr[i]){
      max = arr[i];
    }
  }

  avg = Number((sum / arr.length).toFixed(2))

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  if(!arr.length){
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;

}

function differenceMaxMinWorker(...arr) {

  if(!arr.length){
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);

}

function differenceEvenOddWorker(...arr) {

  if(!arr.length){
    return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else{
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {

  if(!arr.length){
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;

}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++){
    const funcResult = func(...arrOfArr[i]);

    if(maxWorkerResult < funcResult){
      maxWorkerResult = funcResult;
    }
  }

  return maxWorkerResult;

}