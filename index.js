// javascript
const images = ['darmkWorksuit.jpg', 'damrkCleaning.jpg', 'damrkGarden.jpg', 'damrkHandtool.jpg', 'damrkPlumbing.jpg', 'Brickforce.jpg', 'damrkPvcs.jpg',]
const section = document.getElementById('store')
let button = document.getElementById('view')
let currentImage = 0
let intervalId = setInterval(changeImage, 2000);
const change = document.getElementById('catalogue')


button.addEventListener('click', function(){
    if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
})
function changeImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  document.getElementById('catalogueOne').src = images[currentImage];
}

