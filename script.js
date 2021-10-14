console.log("Log");

const aboutMe = document.querySelector("#about-me-link");
const aboutMeBackButton = document.querySelector("#about-me-back");
const aboutMeDefaultText = aboutMe.innerHTML;

const digitalWorld = document.querySelector("#digital-world-link");
const digitalWorldDefaultText = digitalWorld.innerHTML;
const digitalWorldBackButton=document.querySelector('#digital-world-back')
const portfolio = document.querySelector("#portfolio-link");
const portfolioDefaultText = portfolio.innerHTML;
const portfolioBackButton=document.querySelector('#portfolio-back')

gsap.defaults({
  delay: 0.1,
  duration: 1,
});
var introTl=gsap.timeline();
introTl.from('.hero_text',{opacity:0,x:100,delay:.5})
var heroTl = gsap.timeline();
heroTl.pause();
heroTl.to(".hero_text", { opacity: 0, x: -100 });

var aboutMeTl = gsap.timeline({
  delay: 0.6,
});
aboutMeTl.pause();
aboutMeTl.from(".about-me", { opacity: 0, x: 100 });


var portfolioTl = gsap.timeline({
    delay: 0.6,
  });
  portfolioTl.pause();
  portfolioTl.from(".portfolio", { opacity: 0, x: 100 });
  
  var digitalWorldTl=gsap.timeline({
    delay:0.6
  })
  digitalWorldTl.pause()
  digitalWorldTl.from('.digital-world',{opacity:0,x:100})
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
  console.log('digttal world click')
  heroTl.play();
  digitalWorldTl.play()
});
digitalWorldBackButton.addEventListener('click',()=>{
  digitalWorldTl.reverse()
  setTimeout(()=>{heroTl.reverse()},600)
})

digitalWorld.addEventListener("mouseover", () => {
  digitalWorld.innerHTML = "Do you need a  Website?";
});
digitalWorld.addEventListener("mouseout", () => {
  digitalWorld.innerHTML = digitalWorldDefaultText;
});
//!Portfolio Element Event Listener
portfolio.addEventListener("click", () => {
  heroTl.play();
  portfolioTl.play()
});
portfolioBackButton.addEventListener("click", () => {
    console.log("Button Click");
    portfolioTl.reverse();
    setTimeout(()=>{heroTl.reverse()},600)
  });
portfolio.addEventListener("mouseover", () => {
  portfolio.innerHTML = "Portfolio";
  console.log("Portfolio Mouse over");
});
portfolio.addEventListener("mouseout", () => {
  portfolio.innerHTML = portfolioDefaultText;
});
