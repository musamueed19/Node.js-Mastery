// destructuring assignment to get command line arguments
const [j1, j2, ...name] = process.argv;

// print welcome message
console.log(`Hello ${name.join(' ')}, Welcome to Node.js`)

