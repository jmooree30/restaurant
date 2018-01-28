import {tab1,tab2,tab3,style} from "./tabs";
import header from "./header";
import build from "./build"
import footer from "./footer"
import {about,menu,contact} from "./content"

const content = document.querySelector("#content");
build([header(), tab1(), tab2(), tab3(), about(), footer()], content)

const buttons = document.querySelectorAll("button")
console.log(buttons)
buttons.forEach(function(button){
  button.addEventListener("click", function(){
   const p = document.querySelector("p")
    p.innerHTML = ""
    if (button.innerHTML == "About us"){
    p.appendChild(about())
    }
    if (button.innerHTML == "Menu"){
    p.appendChild(menu())
    }
    if (button.innerHTML == "Contact"){
    p.appendChild(contact())
    }
  })
})