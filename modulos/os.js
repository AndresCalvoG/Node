const os = require("os");

console.log(os.arch()); //muestra la arquitectura de el SO
console.log(os.platform()); //muestra la plataforma usada
console.log(os.cpus().length); //muestra informacion de las cpus y con length la cantidad de nucleos
console.log(os.constants); //muestra todas las señales y constantes del sistema
console.log(os.freemem()); //muestra los bytes de memoria libre
console.log(os.totalmem()); //muestra los bytes de memoria total
console.log(os.homedir()); //muestra el directorio raiz de la maquina
console.log(os.tmpdir()); //muestrala eldirectorio de archivos temporales
console.log(os.hostname()); //muestra el nombre de la maquina
console.log(os.networkInterfaces()); //muestra todas las interfaces de red
