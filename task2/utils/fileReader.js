const fs = require("fs");
const path = require("path");

exports.readFiles = async (directory) => {
    const fileNames = await fs.promises.readdir(directory);
    const jsonData = [];

    if (!fileNames.length) return 'Nothing to read.'
    for (let file of fileNames) {
        const absolutePath = path.join(directory, file);

        const data = JSON.parse(await fs.promises.readFile(absolutePath));
        jsonData.push(data);
    }

    return jsonData;
}
