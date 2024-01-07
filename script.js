function fibonaciNumber(n){
    let fibonaciArray = [];
    if ( n < 0 ){
      return "Please enter a valid number";
    }else if ( n === 0 ){
      return fibonaciArray = [0] ;
    }else if ( n === 1 ){
      return fibonaciArray = [0, 1];
    }

    let lastNumber = 1;
    let nrAdd =  0;
    let fibonnaciNr = 0;
    for( let i = 0; i < n; i++ ){
      // console.log("all numbers: ", fibonnaciNr, i);
      fibonaciArray.push(fibonnaciNr);
      nrAdd = lastNumber;
      lastNumber = fibonnaciNr;
      fibonnaciNr += nrAdd;
    }

    console.log('array numbers normal function: ', fibonaciArray);
  }

  let arrayNr = [0, 1, 1];
  
  function fibonaciNumberRecurssion(n){
    if ( n < 0 ){
      return "Please enter a valid number";
    }else if ( n === 0 ){
      return 0;
    }else if ( n === 1 ){
      return 1;
    }
    let fibonaciNr= 0;
    let okay = true;
    fibonaciNr= fibonaciNumberRecurssion(n-1) + fibonaciNumberRecurssion(n-2);
    for(let item of arrayNr){
        if(item === fibonaciNr){
            okay = false;
        }
    };
    if(okay === true){
        arrayNr.push(fibonaciNr);
    }
    return fibonaciNr;
}
  fibonaciNumberRecurssion(7);
  arrayNr.pop(arrayNr.length - 1)
  console.log('array numbers recursion function: ',arrayNr);
  fibonaciNumber(7);


function mergeSort(array){
    if(array.length < 2){
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray){
const sortedArray = [];
while (leftArray.length && rightArray.length){
    if(leftArray[0] < rightArray[0]){
        sortedArray.push(leftArray.shift())
    }else{
        sortedArray.push(rightArray.shift())
    }
}
return [...sortedArray, ...leftArray, ...rightArray];
}

 const arr = [ 2, 1, 3, 4, 5, 2, 10, 7];
 console.log(mergeSort(arr));