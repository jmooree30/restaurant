function build(elements,container){
  elements.forEach(function(elements){
    container.appendChild(elements);
  })
}

export default build;