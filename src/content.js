function about(){
  const content = document.createElement("p")

  content.setAttribute("style", "height:200px; width:600px; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = " This whole page was created with vanilla javacript."
  return content;
}

function menu(){
  const content = document.createElement("p")
  content.setAttribute("style", "height:200px; width:600px; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = "Menu section"
  return content;
}

function contact(){
  const content = document.createElement("p")
  content.setAttribute("style", "height:200px; width:600px; border:1px solid gray; display:block; margin: 0 auto;")
  content.innerHTML = "Contact me"
  return content;
}

export {about, menu, contact};