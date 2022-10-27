function seRompe() {
  return z + 3;
}

try {
  seRompe();
} catch (error) {
  console.error(error.message);
}
