console.log("inicio");

setTimeout(() => {
  console.log("Timeout");
}, 0);

for (let i = 0; i < 1e90; i++) {
  // Loop pesado (bloqueia a Call Stack)
  console.log(i);
}

console.log("Fim do código");
