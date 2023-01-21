
//------------------Store User Details----------------

let userDetails = JSON.parse(localStorage.getItem("user-details")) || new Array();

let form_pop_up = false;



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

cakesHover.addEventListener("mouseover", () => {
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

personalisedHover.addEventListener("mouseover", () => {
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

document.querySelector("#nav-bar").addEventListener("mouseover", () => {
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none"
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"
})

document.addEventListener("scroll", () => {
    dropFlower.style.display = "none"
    dropPlant.style.display = "none"
    dropGift.style.display = "none"
    dropBirthday.style.display = "none"
    dropAnniversary.style.display = "none"
    dropCakes.style.display = "none";
    dropPersonalised.style.display = "none"
})
// -------------------------- Sign Form ------------------------------------

let sign_inClick = document.querySelector("#sign-in-icon")

let userLogout = document.querySelector("#user-logout");

sign_inClick.addEventListener("click", () => {
    if(form_pop_up){
        userLogout.style.display = "block"
        document.querySelector("#logout-close").addEventListener("click",()=>{
            userLogout.style.display = "none"
        
        })
    }else{
        document.querySelector('.overlay').classList.add('show-overlay');
        document.querySelector("#pop-up-sign-in").style.display = "flex"
    }
})




document.querySelector("#log-in").addEventListener("click", () => {
    document.querySelector("#sign-in-div").style.display = "none"
    document.querySelector("#sign-up-div").style.display = "block"
})

document.querySelector("#sign-up").addEventListener("click", () => {
    document.querySelector("#sign-up-div").style.display = "none"
    document.querySelector("#sign-in-div").style.display = "block"
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector("#pop-up-sign-in").style.display = "none"
})

document.querySelector(".closed").addEventListener("click", () => {
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector("#pop-up-sign-in").style.display = "none"
})

document.addEventListener("scroll", () => {
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector("#pop-up-sign-in").style.display = "none"
})

// ------ Get Deatis from the user for account create -------------

document.querySelector("#mobile").oninput = function () {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
}

function getUserDeatils() { // get user details function Created 
    let signUp_form = document.querySelector("#sign-up-form");
    signUp_form.addEventListener("submit", (event) => {
        event.preventDefault();
        let user_details_form = {
            name: signUp_form.name.value,
            email: signUp_form.email.value,
            mobile: signUp_form.mobile.value,
            password: signUp_form.password.value
        }

        let email = false;
        let mobile = false

        for (let i = 0; i < userDetails.length; i++) {
            if (userDetails[i].email == user_details_form.email) {
                email = true
                break;
            }
        }
        for (let i = 0; i < userDetails.length; i++) {
            if (userDetails[i].mobile == user_details_form.mobile) {
                mobile = true
                break;
            }
        }
        if (email) {
            alert("Email is Already Exist");
        } else if (mobile) {
            alert("Mobile Number is Already Exist");
        } else {
            userDetails.push(user_details_form);
            localStorage.setItem("user-details", JSON.stringify(userDetails));
            alert("Account Created Successfully..!")
            document.querySelector("#sign-up-div").style.display = "none"
            document.querySelector("#sign-in-div").style.display = "block"
        }
    })
}
getUserDeatils(); // function call

function checkUser() {
    let signIn_form = document.querySelector("#sign-in-form");
    let name = document.getElementById("user-name")

    signIn_form.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = false;
        let password = false;
        let userEmail = ""

        for (let i = 0; i < userDetails.length; i++) {
            if (signIn_form.email.value == userDetails[i].email) {
                email = true
                userEmail = userDetails[i].email
                break;
            }
        }

        for (let i = 0; i < userDetails.length; i++) {
            if (signIn_form.password.value == userDetails[i].password) {
                password = true;
                break;
            }
        }

        if (email && password) {
            for (let i = 0; i < userDetails.length; i++) {
                if (userEmail == userDetails[i].email) {
                    name.textContent = userDetails[i].name
                    document.querySelector("#pop-up-sign-in").style.display = "none"
                    document.querySelector('.overlay').classList.remove('show-overlay');
                    form_pop_up = true;

                    let userLogout = document.querySelector("#user-logout");

                    let showName = document.createElement("h3");
                    showName.textContent = `Name : ${userDetails[i].name}`;

                    let showEmail = document.createElement("p");
                    showEmail.textContent = `Email : ${userDetails[i].email}`;

                    let showMobile = document.querySelector("p");
                    showMobile.textContent = `Mobile No. : ${userDetails[i].mobile}`

                    let logout = document.createElement("button");
                    logout.textContent = "Logout";

                    logout.addEventListener("click",()=>{
                        window.location.href = "/HTML/index.html"; 
                    })
                    user = {
                        name : userDetails[i].name,
                        email : userDetails[i].email,
                        mobile : userDetails[i].password,
                        logout : "Logout"
                    }

                    userLogout.append(showName,showEmail,showMobile,logout);
                }
            }

        } else if (email == false && password == false) {   
            alert(" You Enter Wrong Credential")
        } else if (email == false) {
            alert("You Enter Wrong Email..! Please Enter Right Email")
        } else if (password == false) {
            alert("You Enter Wrong Password..! Please Enter Right Password")
        }

    })

}

checkUser();






