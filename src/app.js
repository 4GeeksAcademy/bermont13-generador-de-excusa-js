/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let sujeto = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let objeto = what[Math.floor(Math.random() * what.length)];
  let momento = when[Math.floor(Math.random() * when.length)];
  let excusa = document.getElementById("excuse");

  // let excusa = sujeto + accion + objeto + momento;

  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(excusa);
  excusa.innerHTML = sujeto + " " + accion + " " + objeto + " " + momento;
};
