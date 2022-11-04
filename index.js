import {dogs} from "/data.js"
import {Dog} from "/Dog.js"

let dogProfile = new Dog(dogs[0])
let dogNum = 0
const dogNumLength = dogs.length - 1

document.addEventListener("click", (e) => {
    if (e.target.id == "btn--img--cross") {
        stamp(false)
    } else if (e.target.id == "btn--img--heart") {
        stamp(true)
    } else if (e.target.id == "btn--img--arrow-left") {
        dogNum == 0 ? dogNum = dogNumLength : dogNum--
        dogProfile = new Dog(dogs[dogNum])
        render(dogs[dogNum].hasBeenLiked)
    } else if (e.target.id == "btn--img--arrow-right") {
        dogNum == dogNumLength ? dogNum = 0 : dogNum++
        dogProfile = new Dog(dogs[dogNum])
        render(dogs[dogNum].hasBeenLiked)
    } else if (e.target.id == "main--img") {
        dogNum == dogNumLength ? dogNum = 0 : dogNum++
        dogProfile = new Dog(dogs[dogNum])
        render(dogs[dogNum].hasBeenLiked)
    }
    
})

function render(mode) {
    dogProfile.top = "0px";
    dogProfile.topText = "-64px";
    dogProfile.topBtns = "-25px";
    if (dogProfile.hasBeenSwiped) {
        renderStamp(false)
        dogProfile.top = "-66px";
        dogProfile.topText = "-130px";
        dogProfile.topBtns = "-91px";
    } else if (dogProfile.hasBeenLiked) {
        renderStamp(true) 
        dogProfile.top = "-66px";
        dogProfile.topText = "-130px";
        dogProfile.topBtns = "-91px";
    } else if (document.getElementById("main--stamp")) {
        document.getElementById("main--stamp").innerHTML = ""
    }
    
    document.getElementById("main--render").innerHTML = 
        `<img id="main--img" class="main--img" src="${dogProfile.avatar}" style="top: ${dogProfile.top};" >
         <div id="main--text" class="main--text" style="top: ${dogProfile.topText};" >
            <h2 id="main--text--title">${dogProfile.name}</h2>
            <p id="main--text--subtext">${dogProfile.bio}</p>
         </div>
         <div id="btn--section" class="btn--section" style="top: ${dogProfile.topBtns};">
            <div id="btn--img--arrow-left" class="arrow-left btn-img-box">
                <img id="btn--img--arrow-left" class="btn--img" src="/images/arrow_left.png"> 
            </div>
            <div id="btn--img--cross" class="cross btn-img-box">
                <img id="btn--img--cross" class="btn--img" src="/images/icon-cross.png">
            </div>
            <div id="btn--img--heart" class="heart btn-img-box">
                <img id="btn--img--heart" class="btn--img" src="/images/icon-heart.png"> 
            </div>
            <div id="btn--img--arrow-right" class="arrow-right btn-img-box">
                <img id="btn--img--arrow-right" class="btn--img" src="/images/arrow_right.png"> 
            </div>
        </div>`
    
}

function stamp(mode) {
    if (mode) {
        dogs[dogNum].hasBeenSwiped = false
        dogs[dogNum].hasBeenLiked = true
    } else {
        dogs[dogNum].hasBeenSwiped = true
        dogs[dogNum].hasBeenLiked = false 
    }
    renderStamp(mode)
}


function renderStamp(mode) {
    if (mode) {
        document.getElementById("main--stamp").innerHTML = 
            `<div class="stamp" style="color: #29D78A">LIKE</div>`     
    } else {
        document.getElementById("main--stamp").innerHTML = 
            `<div class="stamp" style="color: #F9655C">NOPE</div>`
    }
    document.getElementById("main--img").style.top = "-66px" 
    document.getElementById("main--text").style.top = "-130px"
    document.getElementById("btn--section").style.top = "-91px"
}


render()