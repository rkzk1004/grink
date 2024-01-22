// lenis
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

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

// float-area
const floatBtn = $('.float-area a')
floatBtn.click(function(e){
  e.preventDefault()
  $('html,body').animate({
    scrollTop:$(this.hash).offset().top
  },1000)
})
floatBtn.mouseover(function(){
  console.log();
  gsap.to('.float-box',0.3,{
    width:$(this).outerWidth()+10+'px',
    left:$(this).position().left-5,
  })
  // $('.float-box').css({
  //   width:$(this).outerWidth()+'10px',
  //   // left:$('.float-area a').left()+'px'
  // })
})





/*

https://www.matilda-design.ru/grink/orange-low/1.png

https://www.matilda-design.ru/grink/bubble-low/1.png
*/



const canvas = document.querySelector('#video-canvas-2');
const ctx = canvas.getContext('2d');

canvas.width = 312;
canvas.height = 936;

const frameCount = 31;

const currentFrame = (idx) => {
  // return `asset/images/capture/capture${idx.toString()}.jpg`;
  // console.log(`https://www.matilda-design.ru/grink/orange-low/${idx}.png`);

  // return `https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/turn/large/large_${idx.toString().padStart(4, '0')}.jpg`;
  return `./assets/images/orange/${idx}.png`;
}; // 리턴 필수

const images = [];
const card = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i + 1);
  images.push(img);
}

gsap.to(card, {
  frame: frameCount - 1,
  snap: 'frame',
  ease: 'none',
  scrollTrigger: {
    trigger: '.sc-ad .group-sticky',
    scrub: 1,
    start: '0% 0%',
    end: '100% 100%',
    // pin: true,
    // markers: true
  },
  onUpdate: render,
  // duration: 4,
});

images[0].onload = render;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(images[card.frame], 0, 0, 312 ,936);
}


