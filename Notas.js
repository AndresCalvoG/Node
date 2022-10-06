/*
1) realizamos la intalacion desde la web de Node.js
  ejecutamos el comando node -v en la terminal para saber la version 
  que estamos trabajando.

  Que es NodeJS?
  es un entorno de ejecucion de javascript fuera del navegador y se creo
  en 2009 orientado a servidores

  * es concurrente, osea que es monohilo, con entradas y salidas asincronas
  un proceso por cada nucleo del procesador
  * funciona con el motor V8 de google creado en 2008 escrito en c++,
  convierte js en codigo maquina en lugar de interpretarlo en tiempo real
  *existe un bucle de eventos que se ejecuta constantemente asi que puedes 
  orientar el codigo de forma reactiva.

Event Looop: Asincronia por diseño
*es un bucle que gestiona de forma asincrona todos los eventos de la
aplicacion.
*los eventos inician en el event queue y pasan al event loop si la tarea
es compleja y toma mas tiempo entonces pasara al thread pool el cual 
tendra que ejecutar los procesos mas lentos.
*el thread pool por cada evento levantara un thread individual por cada uno

*/
