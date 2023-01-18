//------------------Image Slider Start---------------- 

let imageSlider = document.querySelector("#slider");

function slideShow() {
    let count = 1;
    let slideImage = document.createElement("img");
    slideImage.setAttribute("src", `/Images/slider${count}.avif`)
    imageSlider.append(slideImage);

    setInterval(() => {
        if (count < 4) {
            count++;
            slideImage.setAttribute("src", `/Images/slider${count}.avif`)
        } else {
            count = 1;
            slideImage.setAttribute("src", `/Images/slider${count}.avif`)
        }
    }, 2000)
}
slideShow();


//------------------Drop Down list Flower ---------------- 

let flowerHover = document.querySelector("#flower")
let dropFlower = document.querySelector("#drop-down-flower");

flowerHover.addEventListener("mouseover", () => {
    dropFlower.style.display = "flex"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none";
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"
})

//------------------Drop Down list Plant ---------------- 

let plantHower = document.querySelector("#plant");
let dropPlant = document.querySelector("#drop-down-plant");

plantHower.addEventListener("mouseover", () => {
    dropPlant.style.display = "flex"
    dropFlower.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none";
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"

})

//------------------Drop Down list Gift ---------------- 

let giftHover = document.querySelector("#gifts");
let dropGift = document.querySelector("#drop-down-gift")

giftHover.addEventListener("mouseover", () => {
    dropGift.style.display = "flex"
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropBirthday.style.display = "none";
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"
})

//------------------Drop Down list Birthday---------------- 

let birthdayHover = document.querySelector("#birthday");
let dropBirthday = document.querySelector("#drop-down-birthday");

birthdayHover.addEventListener("mouseover", () => {
    dropBirthday.style.display = "flex";
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"
})


//------------------Drop Down list Anniversary---------------- 

let anniversaryHover = document.querySelector("#anniversary");
let dropAnniversary = document.querySelector("#drop-down-anniversary");

anniversaryHover.addEventListener("mouseover", () => {
    dropAnniversary.style.display = "flex"
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none";
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"
})

//------------------Drop Down list Cakes ---------------- 

let cakesHover = document.querySelector("#cakes");
let dropCakes = document.querySelector("#drop-down-cake");

cakesHover.addEventListener("mouseover",()=>{
    dropCakes.style.display = "flex";
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none";
    dropAnniversary.style.display = "none"
    dropPersonalised.style.display = "none"
    
})

//------------------ Drop Down list Personalised ---------------- 

let personalisedHover = document.querySelector("#personalised");
let dropPersonalised = document.querySelector("#drop-down-personalised");

personalisedHover.addEventListener("mouseover",()=>{
    dropPersonalised.style.display = "flex";
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none";
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none"
})


// When hover on image slider drop down list display none

imageSlider.addEventListener("mouseover", () => {
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none"
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"
})







