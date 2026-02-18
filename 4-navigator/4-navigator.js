const adressLat = 10;
const adressLong = 10;
const positionLat = 5;
const positionLong = 5;

console.log(
  `Длина пути: ${Math.sqrt(
    (adressLong - positionLong) ** 2 + (adressLat - positionLat) ** 2
  ).toFixed(2)}`
);
