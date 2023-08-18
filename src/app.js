/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensiones = ["com", "es", "ar", "net"];

window.onload = function() {
  //write your code here

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensiones.length; l++) {
          let domainResults = (domainResults +=
            pronoun[i] + adj[j] + noun[k] + "." + extensiones[l] + "<br>");

          document.getElementById("domain").innerHTML = domainResults;
          //pronoun[i] + adj[j] + noun[k] + "." + extensiones[l];
        }
      }
    }
  }
};
