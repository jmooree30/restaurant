function about(){
  const content = document.createElement("p")
  content.setAttribute("style", "text-align:center;height:200px; width:75%; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = " This whole page was created with vanilla javacript."
  return content;
}

function menu(){
  const content = document.createElement("p")
  content.setAttribute("style", "text-align:center; height:200px; width:75%; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = "nom nom nom"
  return content;
}

function contact(){
  const content = document.createElement("p")
  content.setAttribute("style", "text-align:center; height:200px; width:75%; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = `<a href="https://github.com/jmooree30">Github</a>`
  return content;
}

export {about, menu, contact};