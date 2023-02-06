function mergeSort(array){
    if(array.length <= 1){
      return array;
    }
      let middle = Math.floor(array.length /2);
      let firstHalf = array.slice(0,middle);
      let secondHalf = array.slice(middle);
      
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  function merge(left,right){
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex]<right[rightIndex]){
        resultArray.push(left[leftIndex]);
        leftIndex++;
      }else{
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  let list = [9,5,3,1,11,18,6,4];
  console.log(mergeSort(list));