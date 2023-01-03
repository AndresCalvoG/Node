function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 1000);
}

asincrona(function (err, data) {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;
    // throw err; // NO VA A FUNCIONAR EN CALLBACKS DENTRO DE FUNCIONES ASINCRONA
  }
  console.log("todo bien", data);
});
