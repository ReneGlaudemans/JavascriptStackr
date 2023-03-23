const canvasSquare = document.querySelector('#square')
const canvasStraight = document.querySelector('#straight')
const canvasT = document.querySelector('#T')
const canvasL = document.querySelector('#L')
const canvasSkew = document.querySelector('#skew')
const Truckbtn =document.querySelector('#addTruck')


const square = canvasSquare.getContext('2d')
const straight = canvasStraight.getContext('2d')
const T = canvasT.getContext('2d')
const L = canvasL.getContext('2d')
const skew = canvasSkew.getContext('2d')
const trucks = document.querySelectorAll('.truck')
const truckcontainer = document.querySelector('#truckcontainer')

square.fillStyle = '#ffff00'
square.fillRect(0, 0, 100, 100)

straight.fillStyle = '#00ffff'
straight.fillRect(0,0,50,1000)

// Truckbtn.addEventListener('click',()=>{
//     const canvas = document.createElement("canvas")
//     canvas.className = "truck"
//     truckcontainer.appendChild(canvas)
// })

trucks.forEach((truck) => {
    truck.addEventListener("dragover", (e) => {
        e.preventDefault()
        truck.classList.add('hovered')
    })
    truck.addEventListener("drop" , (e) => {
        e.preventDefault()
        truck.appendChild(canvasSquare)
    })
})



