const express = require("express");
const PORT = 5000;
const app = express();
const target = 555;

async function start() {
    try {
        app.listen(PORT, async () => {
            console.log("Server has been started");
            const arr = generateNumbers();
            console.time("getIndex");
            console.log(getIndex(arr, target));
            console.timeEnd("getIndex");
            process.exit(0);
        });
    } catch (e) {
        console.log(e);
    }
}

exports.generateNumbers = () => {
    const res = []

    for (let i = 0; i < 1000000; i++) {
        res.push(Math.floor(Math.random() * (1000 + 1)));
    }
    res.sort();

    return res;
}

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (target < arr[mid]) {
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

start();