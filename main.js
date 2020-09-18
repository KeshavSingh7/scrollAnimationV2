const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const introText = intro.querySelector("h1");
//const outro = document.querySelector(".outro");
//const outroText = outro.querySelector("h1");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 18000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);
  video.currentTime = delay;
}, 42);
