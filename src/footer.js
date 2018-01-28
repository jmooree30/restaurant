function footer(){
  footer = document.createElement("footer")
  footer.setAttribute("style", "text-align:center; position:fixed; bottom:0; width:100%; height:50px; border:1px solid black;")
  footer.innerHTML = "This is the boring page footer."
  return footer;
}

export default footer;