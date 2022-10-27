console.log("algo");
console.info("informacion");
console.error("error");
console.warn("peligro");

var tabla = [
  { a: 1, b: "z" },
  {
    a: 2,
    b: "x",
  },
];
console.table(tabla);
console.group("conver");
console.log("hola");
console.log("adios");
console.groupEnd("conver");

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
