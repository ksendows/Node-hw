let innerName;

exports.setName = (name) => innerName = name;

exports.sayHello = () => console.log(`Hello, I'm ${innerName}`);;