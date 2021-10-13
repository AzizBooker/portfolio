console.log('Log')

const aboutMe=document.querySelector('#about-me-link');
const aboutMeDefaultText=aboutMe.innerHTML;

const digitalWorld=document.querySelector('#digital-world-link')
const digitalWorldDefaultText=digitalWorld.innerHTML

const portfolio=document.querySelector('#portfolio-link')
console.log(portfolio)
const portfolioDefaultText=portfolio.innerHTML

gsap.defaults({
    delay:0.1,
    duration:1
})

var tl=gsap.timeline()
tl.pause()
tl.to('.hero_text',{opacity:0,x:-100})

//! About Me Event Listener
aboutMe.addEventListener('click',()=>{
    tl.play()
})
aboutMe.addEventListener('mouseover',(event)=>{
    aboutMe.innerHTML="About Me"
})
aboutMe.addEventListener("mouseout",(event)=>{
    aboutMe.innerHTML=aboutMeDefaultText
})
//! Digital World Portfolio Event Listener
digitalWorld.addEventListener('click',()=>{
    tl.play()
})

digitalWorld.addEventListener('mouseover',()=>{
    digitalWorld.innerHTML="How can i help you?"
})
digitalWorld.addEventListener('mouseout',()=>{
    digitalWorld.innerHTML=digitalWorldDefaultText
})
//!Portfolio Element Event Listener
portfolio.addEventListener('click',()=>{
    tl.play()
})
portfolio.addEventListener("mouseover",()=>{
    portfolio.innerHTML="Portfolio"
    console.log('Portfolio Mouse over')

})
portfolio.addEventListener('mouseout',()=>{
    portfolio.innerHTML=portfolioDefaultText
})