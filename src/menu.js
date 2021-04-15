const menu = () => {
  const menuList = document.createElement("div");
  menuList.classList.add("menuList");
  const lunch = document.createElement("ul");
  const lunch1 = document.createElement("li");
  lunch1.textContent = "Lunch1";
  lunch.appendChild(lunch1);
  menuList.appendChild(lunch);

  return menuList;
};

export default menu;
