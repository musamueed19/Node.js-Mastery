// This is a file system module
const fs = require("fs");

// This is a path module
const path = require("path")

// This is a os module
const os = require("os")


// Create a new directory
fs.mkdir("fs-files", (err) => {
  if (err && err.code !== "EEXIST") return console.error("Error Creating Directory:", err);
  console.log("Success: Directory created");
});

// Write a file in the new directory
fs.writeFile("fs-files/write.txt", "Hello, Node.js File System!", (err) => {
  if (err) {
    return console.error("Error Write Opertation:", err);
  }
  console.log("Success: Write operation -> write.txt");
});

fs.readFile("fs-files/write.txt", (err, data) => {
    if (err) return console.error("Error Read Operation:", err)
    console.log("Success: Read Operation -> write.txt\n", data.toString())
})


// Get the path of the current directory
const currentPath = path.resolve(__dirname);
console.log("Current Path:", currentPath);
// Join paths
const newPath = path.join(currentPath, "fs-files", "write.txt");
console.log("Joined Path:", newPath);
// basename, dirname, extname
console.log("Base Name:", path.basename(newPath));
console.log("Dir Name:", path.dirname(newPath));
console.log("Ext Name:", path.extname(newPath));
// Parse path
console.log("Parsed Path:", path.parse(newPath));


// Get OS information
console.log("OS Platform:", os.platform());
console.log("OS Architecture:", os.arch());
console.log("OS CPU Cores:", os.cpus().length);
console.log("OS Total Memory (MB):", os.totalmem() / (1024 * 1024));
console.log("OS Free Memory (MB):", os.freemem() / (1024 * 1024));
console.log("OS Home Directory:", os.homedir());
console.log("OS Uptime (Seconds):", os.uptime());
// os user info
console.log("OS User Info:", os.userInfo());
// os network interfaces
console.log("OS Network Interfaces:", os.networkInterfaces());
// os temp directory
console.log("OS Temp Directory:", os.tmpdir());
// os hostname
console.log("OS Hostname:", os.hostname());
// os type
console.log("OS Type:", os.type());
// os version
console.log("OS Version:", os.version());
// os release version
console.log("OS Release Version:", os.release());

