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
function hablar(callback) {
  setTimeout(() => {
    console.log("bla bla bla...");
    callback();
  }, 1000);
}

//function recursiva
function conversacion(name, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(name, --veces, callback);
    });
  } else {
    adios(name, callback);
  }
}

console.log("inicio");
hola("Andres", function (name) {
  conversacion(name, 3, function () {
    console.log("fin");
  });
});
// hola("andres", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log("fin");
//         });
//       });
//     });
//   });
// });
