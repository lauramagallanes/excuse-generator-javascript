/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let firstPart = who[Math.floor(Math.random() * who.length)];

  let secondPart = what[Math.floor(Math.random() * what.length)];

  let thirdPart = when[Math.floor(Math.random() * when.length)];

  let newExcuse = firstPart + " " + secondPart + " " + thirdPart;

  document.getElementById("excuse").innerHTML = newExcuse;
};
