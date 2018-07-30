const nameWithExtension = module.filename.split("/").pop();
const name = nameWithExtension.split(".")[0];
console.log(name);