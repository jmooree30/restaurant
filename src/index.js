import Tab from "./tabs";
import header from "./header";
import build from "./build"
import footer from "./footer"
import {about,menu,contact} from "./content"

const content = document.querySelector("#content");
content.setAttribute("style", "text-align:center; margin:0 auto;")
build([header(),Tab("About us"),Tab("Menu"),Tab("Contact"), about(), footer()], content)

const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){
  button.addEventListener("click", function(){
   const p = document.querySelector("p")
   p.remove()
   if (button.innerHTML == "About us"){
    document.body.appendChild(about())
  }
   if (button.innerHTML == "Menu"){
    document.body.appendChild(menu())
  }
   if (button.innerHTML == "Contact"){
    document.body.appendChild(contact())
  }
})
})