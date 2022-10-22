function hola(name, callback) {
  setTimeout(() => {
    console.log("Hola, " + name);
    callback(name);
  }, 1000);
}

function adios(name, callback) {
  setTimeout(() => {
    console.log("Adios, " + name);
    callback();
  }, 1000);
}

console.log("inicio");
hola("andres", function (nombre) {
  adios(nombre, function () {
    console.log("fin");
  });
});
