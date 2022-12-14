const express = require("express");
const PORT = 5000;
const app = express();
const fs = require("fs");
const { getIndex } = require("./utils/arraySearch");

const target = 911952;

async function start() {
    try {
        app.listen(PORT, async () => {
            console.log("Server has been started");
            const arr = JSON.parse(await fs.promises.readFile('./files/numbers'));
            console.time("getIndex");
            console.log(getIndex(arr, target));
            console.timeEnd("getIndex");
            process.exit(0);
        });
    } catch (e) {
        console.log(e);
    }
}

start();
