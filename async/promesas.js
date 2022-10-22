function hola(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola, " + name);
      resolve(name);
    }, 1000);
  });
}
function adios(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios, " + name);
      resolve(name);
    }, 1000);
  });
}
function hablar(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla...");
      //resolve(name);
      reject("error promise");
    }, 1000);
  });
}

console.log("inicio..");
hola("andres")
  .then(hablar)
  .then(adios)
  .then((name) => {
    console.log("fin");
  })
  .catch((error) => {
    console.log("error");
    console.error(error);
  });
