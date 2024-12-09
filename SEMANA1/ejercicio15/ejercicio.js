let segundosTotales = parseInt(prompt("Ingresa el número de segundos"));
let horas = Math.floor(segundosTotales / 3600); 
segundosTotales %= 3600; 
let minutos = Math.floor(segundosTotales / 60); 
segundosTotales %= 60; 
console.log("Horas: " + horas + ", Minutos: " + minutos + ", Segundos: " + segundosTotales);