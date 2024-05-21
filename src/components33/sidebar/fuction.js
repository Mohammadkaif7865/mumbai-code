export const openSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-[-100%]");
  document.querySelector("#sidebar").classList.add("left-0");
};
export const closeSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-0");
  document.querySelector("#sidebar").classList.add("left-[-100%]");
};
;
