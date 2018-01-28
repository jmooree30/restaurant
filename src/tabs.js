const Tab = (name) => {
  const tab = document.createElement("button")
  tab.innerHTML = name
  tab.setAttribute("style","margin:0 5px; border-radius:0; background:gray; color:white; border:none;")
  return tab
};

export default Tab