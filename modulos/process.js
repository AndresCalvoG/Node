//const process = require('process')

process.on("beforeExit", () => {
  console.log("el proceso va a terminar");
});

process.on("exit", () => {
  console.log("el proceso acabo");
});

process.on("uncaughtException", (err, origen) => {
  console.error("se nos olvido capturar el error");
  console.error(err);
});

gaga();
