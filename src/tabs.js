function tab1(){
  const tab1 = document.createElement("button")
  tab1.innerHTML = "About us";
  tab1.style.marginLeft = "40%";
  return tab1;
}

function tab2(){
  const tab2 = document.createElement("button")
  tab2.innerHTML = "Menu";
  return tab2;
}

function tab3(){
  const tab3 = document.createElement("button")
  tab3.innerHTML = "Contact";
  return tab3;
}

export {tab1,tab2,tab3}