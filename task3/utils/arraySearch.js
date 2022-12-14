const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if ((arr[mid] == target) && ((mid == 0) || (arr[mid - 1] < target))) {
            return mid;

        } else if (target <= arr[mid]) {
            end = mid - 1;

        } else {
            start = mid + 1;

        }

    }
    return -1;
}

exports.getIndex = (arr, target) => {
    return binarySearch(arr, target);
}