// lenis
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// intro-motion
const introMotionTl = gsap.timeline({})
introMotionTl
.to('.sc-intro-motion .last',{clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',delay:1,duration:2})
.to('.sc-intro-motion .img-area',{width:0,duration:2,ease:'circ.out'})
.to('.sc-intro-motion',{clipPath: 'polygon(0% 0%, 100% 0%, 100% 87%, 0% 62%)'})
.to('.sc-intro-motion',{clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',duration:1})

// body-bg
const bodyBgMotion = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.wrapper',
    start:'0 0',
    end:'100% 100%',
    scrub:true
  }
})
bodyBgMotion.to('.body-bg img',{rotation:360,duration:500,ease:'none'})

// sc-intro
const introMotion = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-intro',
    start:'0 0',
    end:'100% 100%',
    scrub:true
  }
})
introMotion
.to('.sc-intro .img-1',{yPercent:-10},'a')
.to('.sc-intro .img-2',{yPercent:-20},'a')
.to('.sc-intro .img-4',{yPercent:-30},'a')
.to('.sc-intro .img-5',{yPercent:-15},'a')

// sc-ad
const adTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-ad',
    start:'0 100%',
    end:'100% 0',
    scrub:true
  }
})
adTl
.to('.sc-ad .group-circle .text',{rotation:-360},'a')
.to('.sc-ad .circle-area',{width:'80em',height:'80em'},'a')
.to('.sc-ad .circle-area .orange-half',{rotation:180,xPercent:80},'a')

const adTl2 = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-ad .group-info',
    start:'-10% 100%',
    end:'100% 0',
    scrub:true
  }
})
adTl2
.to('.sc-ad .group-info .orange',{rotation:-90,xPercent:-150},'a')
.to('.sc-ad .group-info .orange-half',{rotation:-360,xPercent:150},'a')

const adTl3 = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-bubble .group-content',
    start:'0 0',
    end:'100% 100%',
    scrub:true
  }
})
adTl3.to('.sc-bubble .group-bubble',{yPercent:-50})

// canvas1
const images1 = [];
const card1 = {frame: 0};
const frameCount1 = 30;

const canvas1 = document.querySelector('#video-canvas-1');
const ctx1 = canvas1.getContext('2d');

canvas1.width = 312;
canvas1.height = 936;

const currentFrame1 = (idx) => {
  return `./assets/images/orange/${idx}.png`;
};

for (let i = 0; i < frameCount1; i++) {
  const img1 = new Image();
  img1.src = currentFrame1(i + 1);
  images1.push(img1);
}

gsap.to(card1, {
  frame: frameCount1 - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    trigger: '.sc-ad .group-sticky',
    scrub: 1,
    start: '0% 0%',
    end: '100% 100%',
    // markers: true
  },
  onUpdate: render1,
});

images1[0].onload = render1;

function render1() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  ctx1.drawImage(images1[card1.frame], 0, 0, 312 ,936);
}

// canvas2
const images2 = [];
const card2 = {frame: 0};
const frameCount2 = 30;

const canvas2 = document.querySelector('#video-canvas-2');
const ctx2 = canvas2.getContext('2d');

canvas2.width = 312;
canvas2.height = 936;

const currentFrame2 = (idx) => {
  return `./assets/images/bubble/${idx}.png`;
};

for (let i = 0; i < frameCount2; i++) {
  const img2 = new Image();
  img2.src = currentFrame2(i + 1);
  images2.push(img2);
}

gsap.to(card2, {
  frame: frameCount2 - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    trigger: '.sc-bubble .sticky-area',
    scrub: 1,
    start: '0% 0%',
    end: '100% 100%',
    // markers: true
  },
  onUpdate: render2,
});

images2[0].onload = render2;

function render2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.drawImage(images2[card2.frame], 0, 0, 312 ,936);
}

// float-area
const floatBtn = $('.float-area a')
floatBtn.click(function(e){
  e.preventDefault()
  $('html,body').animate({
    scrollTop:$(this.hash).offset().top
  },1000)
})
floatBtn.mouseover(function(){
  gsap.to('.float-box',0.3,{
    width:$(this).outerWidth()+10+'px',
    left:$(this).position().left-5,
  })
})

$('.float-area a').mouseover(function(){
  $(this).addClass('on').siblings().removeClass('on')
})