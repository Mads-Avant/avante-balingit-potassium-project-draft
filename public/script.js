var images = [], x = -1;
  images[0] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home1?v=1734942389233";
  images[1] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home2?v=1734942389420";
  images[2] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home3?v=1734942523351";
  images[3] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home4?v=1734942571309";
  images[4] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home5?v=1734942624884";
  images[5] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home6?v=1734942736501";
  images[6] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home7?v=1734942747973";
  images[7] = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/home8?v=1734942606128";

function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 3000);
}