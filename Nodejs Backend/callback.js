// callbacks and their limitation (synchronous way)

const greet = (name, callback) => {
    console.log(`Welcome ${name}`);
    callback(name);
}

const goodbye = (name) => {
    console.log(`Goodbye ${name}!`);
}

greet("Muhammad Musa Mueed", goodbye);