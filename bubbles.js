var button = document.querySelector("button");
button.addEventListener("click", function() {
  var image = document.createElement("img");
  image.setAttribute("src", "http://www.clker.com/cliparts/S/z/T/t/x/o/bubble-md.png");
  image.setAttribute("width", "50px");
  image.setAttribute("height", "50px");
  document.body.appendChild(image);
})
