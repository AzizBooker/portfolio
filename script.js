console.log("Log");

const aboutMe = document.querySelector("#about-me-link");
const aboutMeBackButton = document.querySelector("#about-me-back");
const aboutMeDefaultText = aboutMe.innerHTML;

const digitalWorld = document.querySelector("#digital-world-link");
const digitalWorldDefaultText = digitalWorld.innerHTML;

const portfolio = document.querySelector("#portfolio-link");
console.log(portfolio);
const portfolioDefaultText = portfolio.innerHTML;

gsap.defaults({
  delay: 0.1,
  duration: 1,
});

var heroTl = gsap.timeline();
heroTl.pause();
heroTl.to(".hero_text", { opacity: 0, x: -100 });

var aboutMeTl = gsap.timeline({
  delay: 0.6,
});
aboutMeTl.pause();
aboutMeTl.from(".about-me", { opacity: 0, x: 100 });

//! About Me Event Listener
aboutMe.addEventListener("click", () => {
  heroTl.play();
  aboutMeTl.play();
});
aboutMeBackButton.addEventListener("click", () => {
  console.log("Button Click");
  aboutMeTl.reverse();
  setTimeout(()=>{heroTl.reverse()},600)
});
aboutMe.addEventListener("mouseover", (event) => {
  aboutMe.innerHTML = "About Me";
});
aboutMe.addEventListener("mouseout", (event) => {
  aboutMe.innerHTML = aboutMeDefaultText;
});
//! Digital World Portfolio Event Listener
digitalWorld.addEventListener("click", () => {
  tl.play();
});

digitalWorld.addEventListener("mouseover", () => {
  digitalWorld.innerHTML = "Why you need a Website";
});
digitalWorld.addEventListener("mouseout", () => {
  digitalWorld.innerHTML = digitalWorldDefaultText;
});
//!Portfolio Element Event Listener
portfolio.addEventListener("click", () => {
  tl.play();
});
portfolio.addEventListener("mouseover", () => {
  portfolio.innerHTML = "Portfolio";
  console.log("Portfolio Mouse over");
});
portfolio.addEventListener("mouseout", () => {
  portfolio.innerHTML = portfolioDefaultText;
});
