/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const sujetos = ["El Perro", "Mi abuela", "El cartero", "Mi pajaro"];
  const acciones = ["comio", "orino", "desptrozo", "rompio"];
  const objetos = ["mi tarea", "mi telefono", "El carro"];
  const momentos = [
    "antes de clases",
    "cuando estaba durmiendo",
    "mientras hacia ejercicio",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];
  let sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  let accion = acciones[Math.floor(Math.random() * acciones.length)];
  let objeto = objetos[Math.floor(Math.random() * objetos.length)];
  let momento = momentos[Math.floor(Math.random() * momentos.length)];
  let excusa = document.getElementById("excuse");
  // let excusa = sujeto + accion + objeto + momento;
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(excusa);
  excusa.innerHTML = sujeto + " " + accion + " " + objeto + " " + momento;
};
