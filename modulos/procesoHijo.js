const { exec, spawn } = require("child_process");

exec("ls -la", (err, stout, sterr) => {
  if (err) {
    console.log(err.message);
    return false;
  }
  console.log(stout);
});

let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
  console.log(process.killed);
  console.log(dato.toString());
});
proceso.on("exit", () => {
  console.log("el proceso termino");
});
