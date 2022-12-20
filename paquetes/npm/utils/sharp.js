const sharp = require("sharp");

sharp("./logo.png").resize(80).toFile("resize.png");
