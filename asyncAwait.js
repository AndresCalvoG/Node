async function hola(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + name);
      resolve(name);
    }, 1000);
  });
}
async function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios, " + name);
      resolve(name);
    }, 1000);
  });
}
async function hablar(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla...");
      resolve(name);
      //reject("error promise");
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("andres");
  await hablar();
  await adios(nombre);
  console.log("fin");
}

console.log("inicio");
main();
