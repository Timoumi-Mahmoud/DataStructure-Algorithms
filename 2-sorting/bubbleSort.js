function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[i] < arr[j]) {
                var temp = void 0;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
var tab = [1, 3, 7, 4, 2];
bubbleSort(tab);
