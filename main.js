const intro = document.querySelector(".intro");
const introText = intro.querySelector("h1");
const content = document.querySelector(".content");
const video = content.querySelector("video");
const contentText = content.querySelector("h1");
const outro = document.querySelector(".outro");
const outroText = outro.querySelector("h1");

const controller = new ScrollMagic.Controller();

let scene2 = new ScrollMagic.Scene({
  duration: 16000,
  triggerElement: content,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(content)
  .addTo(controller);

const animation = gsap.fromTo(contentText, 3, { opacity: 1 }, { opacity: 0 });

let scene3 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: content,
  triggerHook: 0,
})
  .setTween(animation)
  .addTo(controller);

let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene2.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);
