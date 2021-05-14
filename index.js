// Your code here

const dodger = document.querySelector("#dodger")
let dodgerLeft = styleConverter(dodger.style.left)
let dodgerRight = styleConverter(dodger.style.left) - 20

function styleConverter(attr) {
  if (typeof attr === "string") {
    return parseInt(attr)
  } else if (typeof attr === "number") {
    return attr.toString() + "px"
  }
}


function moveDodgerLeft() {
  let newPos = styleConverter(dodger.style.left) - 10
  console.log(styleConverter(newPos))
  if (newPos > 0) {
    dodger.style.left = styleConverter(newPos)
  }
}

function moveDodgerRight() {
  let newPos = styleConverter(dodger.style.left) + 10
  console.log(styleConverter(newPos))
  if (newPos < 400) {
    dodger.style.left = styleConverter(newPos)
  }
}


document.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    moveDodgerLeft()
  } else if (e.keyCode === 39) {
    moveDodgerRight()
  }
})