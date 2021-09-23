function selectSort(arr){
    let length=arr.length;
    for(i=0;i<length;i++){
        let min=arr[i];
        for(j=i+1;j<length;j++){
            if(min>arr[j]){
                let temp=arr[j]
                arr[j]=min
                min=temp;
            }
        }
        arr[i]=min
    }
    return arr
    
}
arr=[1,3,5,7,6,8,4,9,2]
console.log(selectSort(arr))


function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for(var i=1;i<len;i++) {
        preIndex = i - 1;//有序元素下标
        current = arr[i];//哨兵
        while(preIndex>=0 && arr[preIndex]>current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;//哨兵插入替换
    }
    return arr;
}