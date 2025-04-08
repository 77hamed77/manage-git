console.log("version one");
const body = document.querySelector("body");
const titleClick = document.querySelector("div");
const title = document.querySelector('h2')
titleClick.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  titleClick.style.backgroundColor = "red";
  title.style.color = 'white'
});
