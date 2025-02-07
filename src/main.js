var parent = document.getElementById("container");
var character_container = document.getElementById("character_container");
var rose_container = document.getElementById("rose_container");
var character = document.getElementById("character");
var valentine_prompt = document.getElementById("valentine_prompt");
var fireworks = document.getElementsByClassName("firework");

var x = 0;
let y = 0;
var s = 1;

const placeholder = () => {
  var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
  );
  x += s
  character_container.style.transform = `translate3d( ${x*pixelSize}px, 0px, 0)`;
}

const step = () => {
  placeholder();
  if(x < parent.clientWidth / 4 - 20) {
    window.requestAnimationFrame(() => {
      step();
    });
  }
  else {
    character.classList.add('face_forward')
    character.classList.remove('walk_right')
    valentine_prompt.classList.toggle('fade');
  }
}

const movement = step();
cancelAnimationFrame(movement);

const onYesClick = () => {
  let rose_container = document.getElementById("rose_container")
  rose_container.classList.toggle("hide")
  for (let i = 0; i < fireworks.length; i++) {
    // Do something with each element
    fireworks[i].classList.toggle("hide")
  }
  rose_movement()
}

var count = -10
var reverse_movement = false

const rose_movement = () => {
  var pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
  );

  if(!reverse_movement) {
    y += 0.3
    count += 1
    if (count == 30) {
      reverse_movement = !reverse_movement
    }
  } else {
    y -= 0.3
    count -= 1
    if (count == -20) {
      reverse_movement = !reverse_movement
    }
  }
  rose_container.style.transform = `translate3d( 0px, ${y*pixelSize}px, 0)`;

  window.requestAnimationFrame(() => {
    rose_movement();
  });
}
