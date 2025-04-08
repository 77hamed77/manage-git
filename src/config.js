console.log("version one");
const body = document.querySelector("body");
const titleClick = document.querySelector("div");
titleClick.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  titleClick.style.backgroundColor = "red";
});
