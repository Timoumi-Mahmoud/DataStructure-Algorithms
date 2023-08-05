function binarySearch(tab, needle) {
    var hi = tab.length;
    var lo = 0;
    while (hi !== lo) {
        var mid = Math.floor(lo + (hi - lo) / 2);
        if (tab[mid] === needle) {
            return true;
        }
        else if (tab[mid] > needle) {
            hi = mid;
        }
        else {
            lo = mid + 1;
        }
    }
    return false;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(binarySearch(arr, 55));
