/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  return Math.floor(Math.random() * length);
};

let pronoun = ["the","Miour"];
let adj = ["grear", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let b = 0; b < noun.length; b++) {
      console.log(pronoun[i] + adj[a] + noun[b] + ".com");
    }
  }
}
