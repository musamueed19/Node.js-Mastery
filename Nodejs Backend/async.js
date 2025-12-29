// Error handling in asynchronous code
const fs = require("fs").promises;

async function readAsyncFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log("Success: Read Operation ---", data);
  } catch (err) {
    console.error("Error Read Async File:", err);
  }
}

readAsyncFile(__dirname + "/fs-files/nonexistent.txt");
