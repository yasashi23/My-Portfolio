let yy = document.querySelector("style")
let bdy = document.querySelector("div")
let rr = ``
yy.innerHTML += `div {margin-top: 20%; margin-left: 20%;}
li{list-style: none; color: #e3e3e3; font-size: 40px;} *{color: white;}`
yy.innerHTML += rr
bdy.innerHTML += rr

let yui = document.querySelectorAll("svg path")

for(let i = 0; i < yui.length; i++) {
    let uu = `<li>path:nth-child(${i+1}){<li/> <li> stroke-dasharray: ${yui[i].getTotalLength()}; <li> stroke-dashoffset: ${yui[i].getTotalLength()};</li>
                <li>animation: garis 2s ease-in-out forwards 0.3s, fill 0.5s linear forwards 0.4s;</li>}`
}

for(let i = 1; i < 4; i++){
    let yi = `<li>.menu .nav-link:nth-child(${i}){</li><li>	-webkit-animation: tracking-in-expand 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;</li><li>animation: tracking-in-expand 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;}</li>`
    bdy.innerHTML += yi
}

// API 
const getDtJ = "data.json"


const getDt = () => {
    fetch(getDtJ)
        .then(response =>  {
                return response.json()
        }).then(responseJson => {
            console.log(responseJson)
        }).catch(error => {
            console.error(error)
        })
}

document.addEventListener("DOMContentLoaded", getDt)

let svgExp = ["g#htmlGrp", "g#JsGrp", "g#btstrpGrp", "g#cssGrp"]
let rui = document.querySelector('dAB')

for(let i = 0; i < svgExp.length; i++) {
  const hh = document.querySelector(svgExp[i]).getBoundingClientRect()
  console.log(`ini ${svgExp[i]} 
  x= ${hh.x}, 
  y= ${hh.y}`)
  let op = `<li>${svgExp[i]}{</li>
                    <li>transform: translateX();</li>
                    <li>transform: translateY()}</li>`
  bdy.innerHTML += op
}