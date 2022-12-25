let suma = 0;
console.time("bucle");
for (let i = 0; i < 10000; i++) {
  suma++;
}
console.timeEnd("bucle");

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("termino el proceso asincrono");
    });
  });
}

console.time("asincrono");
asincrona().then(() => {
  console.timeEnd("asincrono");
});
