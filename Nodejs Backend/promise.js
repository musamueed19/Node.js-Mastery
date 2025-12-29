// Promises: handling asynchronous operations in JavaScript

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected.");
    }
  }, 2000);
});

// Consuming the Promise
myPromise
  .then((message) => {
    console.log(message); // Handle success
  })
  .catch((error) => {
    console.error(error); // Handle error
  });
// Using Promises to handle asynchronous operations
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 1500);
  });
};

// 3 stages
/*

1- Operation is in process (pending)
2- Operation completed successfully (fulfilled)
3- Operation failed (rejected)

*/

// 1- Failed
const anotherPromise = new Promise((resolve, reject) => {
  const success = false; // Simulate failure
  setTimeout(() => {
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed.");
    }
  }, 12000);
});

anotherPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// promise chaining in "File Reading Simulation"
const fs = require("fs").promises;

fs.readFile(__dirname + "/fs-files/write.txt", "utf8")
  .then((data) => console.log("Success: Read Operation -> write.txt ---", data))
  .catch((err) => console.error("Error: Read Operation:", err));
