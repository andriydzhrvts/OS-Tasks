const express = require("express");
const PORT = 5000;
const app = express();
const { readFiles } = require("./utils/fileReader");

const directory = "./files";

async function start() {
    try {
        app.listen(PORT, async () => {
            console.log("Server has been started");

            const jsonData = await readFiles(directory);
            console.log(jsonData);
        });
    } catch (e) {
        console.log(e);
    }
}

start();