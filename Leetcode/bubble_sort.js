function bubbleSort(arr){
    var len=arr.length;
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr;
}
function sort(array) {
    let flag = true
    while (flag) {
        // console.log("1");
        flag = false
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let a = array[i]
                array[i] = array[i + 1]
                array[i + 1] = a
                flag = true
            }
        }
    }
    return array
}
arr=[1,3,5,7,6,8,4,9,2]
array=[1,3,5,7,6,8,4,9,2]
console.log(bubbleSort(arr))
console.log(sort(array)) 
        