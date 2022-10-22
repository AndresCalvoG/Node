/*
El file system (fs) nos permite acceder a archivos de nuestro sistema
leerlos, escribirlos, modificarlos, etc.
Todas las lecturas con file sistem son asyncronos
*/
const fs = require("fs"); //importamos el modulo de fs

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //leido
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("error", err);
    } else {
      console.log("escrito correctamente");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}
//leer(__dirname + "/archivo.txt", console.log);
//escribir(__dirname + "/archivo1.txt", "soy un archivo nuevo", console.log);
borrar(__dirname + "/archivo1.txt", console.log);
