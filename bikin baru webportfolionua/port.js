// // CLOSE NAV
// const navClose = document.querySelector('.navbar-toggler-icon')

// navClose.addEventListener('click', function(){
//     navClose.classList.toggle("change")
// })

// // NAV LINK 
// const navLink = document.querySelectorAll('.nav-link.active')
// const aboutMe = document.querySelector('#about')
// const project = document.querySelector('#project')
// const contact = document.querySelector('#contact')
// const navbar = document.querySelector('.navbar-brand')


// navbar.addEventListener('click', e => {
//     e.preventDefault()
//     window.scrollTo(window.outerHeight, 0)
// })
// navLink[0].addEventListener('click', () => {
//     const wdw = (window.outerHeight/2.3)
//     window.scrollTo(aboutMe, window.outerHeight-wdw)
// })
// navLink[1].addEventListener('click', () => {
//     const wdw = (window.outerHeight/2.5)
//     window.scrollTo(project, window.outerHeight+wdw)
// })
// navLink[2].addEventListener('click', () => {
//     const wdw = (window.outerHeight*3)
//     window.scrollTo(contact, window.outerHeight+wdw)
// })

// // EMAIL BUTTON
// const button = document.querySelectorAll('.btnEmail')
// const emailSide = document.querySelector('.row .email')

// button.forEach((i,m) => {
//     button[m].addEventListener('click', () => {
//         location.href ="mailto:yasashibriliantp@gmail.com"
//     })
// })

// emailSide.addEventListener('click', () => {
//     location.href ="mailto:yasashibriliantp@gmail.com"})

// // instagram link
// const instagram = document.querySelector('.instagram-img')
// const igMOb = document.querySelector('.instagram-img-mob')
// instagram.addEventListener('click', () => {
//     window.open('https://www.instagram.com/yasashi_bp/', '_blank')})
//     igMOb.addEventListener('click', () => {
//         window.open('https://www.instagram.com/yasashi_bp/', '_blank')})

//     // VISIT WEB
//     const buttonVst = document.querySelector('.visitWeb')
//     buttonVst.addEventListener('click', () => {
//         window.open('https://hanwa-indonesia.co.id/', '_blank')})

// // loading
// const loader = document.querySelector('.loader');
// const bdy = document.querySelector('body');
// setTimeout(function load() {
//     loader.style.display = 'none';
//     bdy.style.overflow = 'visible';
//   },3000)

// // scroll effect
// const scrollElm = document.querySelectorAll(".scroll-element")

// const elementInView = (el, dividend = 1) => {
//     const elementTop = el.getBoundingClientRect().top;
  
//     return (
//       elementTop <=
//       (window.innerHeight || document.documentElement.clientHeight) / dividend
//     );
//   };
  
//   const elementOutofView = (el) => {
//     const elementTop = el.getBoundingClientRect().top;
  
//     return (
//       elementTop > (window.innerHeight || document.documentElement.clientHeight)
//     );
//   };
  
//   const displayScrollElement = (element) => {
//     element.classList.add("scrolled");
//   };
  
//   const hideScrollElement = (element) => {
//     element.classList.remove("scrolled");
//   };
  
//   const handleScrollAnimation = () => {
//     scrollElm.forEach((el) => {
//       if (elementInView(el, 1.20)) {
//         displayScrollElement(el);
//       } else if (elementOutofView(el)) {
//         hideScrollElement(el)
//       }
//     })
//   }
  
//   window.addEventListener("scroll", () => { 
//     handleScrollAnimation();
//   });


  // SWITCH
  const toLight = [
    document.querySelector(".btnOnOff"),
    document.querySelector(".switch"),
    document.querySelector(".dark"),
    document.querySelector(".Light"),
    document.querySelector(".mSwitch"),
    document.querySelector("h1"),
    document.querySelector("h2"),
    document.querySelector(".row.menu"),
    document.querySelector("p.tagLine"),
    document.querySelector("h5"),
    document.querySelector(".circnya")
  ]
  const toLightMany = [
    document.querySelectorAll("p"),
    document.querySelectorAll("h3"),
    document.querySelectorAll(".nav-link"),
    document.querySelectorAll(".circnya .nav-link"),
    document.querySelectorAll(".pemb div")
  ]



toLight[0].addEventListener("click", function(){
    toLight.map(x => x.classList.toggle("end"))
    for(let i = 0; i < toLightMany.length; i++){
      toLightMany[i].forEach(o => o.classList.toggle("end"))
    }
  })

// navbar 
const navChange = document.querySelector(".pemb")
const bar = document.querySelectorAll(".pemb div")
const menuSvg = document.querySelector(".circMenu")
const io = document.querySelector(".circnya")
io.style.width = innerWidth + "px"
io.style.height = innerHeight + "px"

navChange.addEventListener("click", function(){
  navChange.classList.toggle("change")
  menuSvg.classList.toggle("change")
})
// CIRCLE MENU
const inCirc = document.querySelectorAll(".circnya ul li")

inCirc[0].addEventListener("click", function(x) {
  x.preventDefault()
 this.style.opacity = "10"
 let yy = [inCirc[1], inCirc[2]]
 yy.map(x => x.style.opacity = ".4")
})
inCirc[1].addEventListener("click", function(x) {
  x.preventDefault()
 this.style.opacity = "10"
 let yy = [inCirc[0], inCirc[2]]
 yy.map(x => x.style.opacity = ".4")
})
inCirc[2].addEventListener("click", function(x) {
  x.preventDefault()
 this.style.opacity = "10"
 let yy = [inCirc[0], inCirc[1]]
 yy.map(x => x.style.opacity = ".4")
})



let svgPth = document.querySelectorAll("#svg5 path")

// for(let i = 0; i < svgPth.length; i++) {
//   console.log(`arr ke ${i}, path ke ${svgPth[i].getTotalLength()} `)
// }



const bdy = document.querySelector("body")
const dataku = "data.json"

const dptData = () => {
  fetch(dataku)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      console.log(responseJson)
    })
    .catch(error => {
      console.error(error)
    })
}

document.addEventListener("DOMContentLoaded", dptData)


// SVG EXPERT
let svgExp = ["g#htmlGrp", "g#JsGrp", "g#btstrpGrp", "g#cssGrp"]
const svF = [
  document.querySelector(svgExp[0]).getBoundingClientRect(),
  document.querySelector(svgExp[1]).getBoundingClientRect(),
  document.querySelector(svgExp[2]).getBoundingClientRect(),
  document.querySelector(svgExp[3]).getBoundingClientRect()

]
let rui = document.querySelector('.dAB')

for(let i = 0; i < svgExp.length; i++) {
  const hh = document.querySelector(svgExp[i]).getBoundingClientRect()
  console.log(`ini ${svgExp[i]} 
  x= ${hh.x}, 
  y= ${hh.y}`)
  // let oop = `${svgExp[i]}{
  //                   transform: translateX();
  //                   transform: translateY()}`
                    
  //                   console.log(oop)
}




