
let imageSlider = document.querySelector("#slider");



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



let flowerData = [
    {
        id: 1,
        title: "Roses In Heart Shape Sleeve",
        category: "flower",
        description: "Flowers express love and give a million love messages that even words cannot put together. This Valentine bouquet is made in the best possible way with personal touches, hand tied, lovingly wrapped, with the most gorgeous red roses with baby breath. Notch up your love relation by sending this hand-tied bouquet online",
        price: 449,
        image: "https://imgcdn.floweraura.com/hand-tied-rose-love-9855560fl-C_0.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 2,
        title: "Majestic Bouquet Of Roses",
        category: "flower",
        description: "Shop for this exquisite bouquet of red roses for your loved ones! Perfect for expressing heartfelt emotions, this alluring bouquet features a bunch of garden-fresh and long-stemmed red roses paired impeccably with white baby's breath blooms! The blossoms are wrapped gracefully in crimson paper and tied with a ribbon. Order this beguiling bouquet now",
        price: 450,
        image: "https://imgcdn.floweraura.com/majestic-bouquet-of-roses-9830820fl-A.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 3,
        title: "Goblet of Roses",
        category: "flower",
        description: "When you rest upon red roses to convey the feelings of your heart, you make sure that love will be conveyed most romantically. Pick an arrangement of lovely red roses along with cute white fillers in a big glass vase. We call it Roses Poses!",
        price: 1200,
        image: "https://imgcdn.floweraura.com/DSC_0647.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 4,
        title: "Paradise Mixed Roses Bouquet",
        category: "flower",
        description: "Red rose symbolises love, the White rose symbolises passion and yellow rose symbolises friendship. This all in one bundle of joys contains beautifully packed bunch of 12 Roses comprising of red, white and yellow colour. Gift this heart crafted fresh flower arrangement to your special ones and spread smiles all around.",
        price:  599,
        image: "https://imgcdn.floweraura.com/DSC_0495.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 5,
        title: "Pristine Pink Roses Sleeve Bouquet",
        category: "flower",
        description: "Pink roses symbolises admiration, gratitude, comfort and joy. Express all these emotions to your beloved over this beautifully heartcrafted pink roses sleeve bouquet. Be it birthday, anniversary, valentine or any other occasion, order and send it online right at their doorsteps.",
        price: 449,
        image: "https://imgcdn.floweraura.com/pristine-pink-roses-sleeve-bouquet-9838950fl-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 6,
        title: "Charming Rose Bouquet",
        category: "flower",
        description: "Our charming rose bouquet is truly enchanting. It features a selection of vibrant red, yellow and pink roses and is perfect for any occasion. The bouquet comes wrapped in cellophane with a lovely bow tied around it. This elegant floral bouquet will remind your loved ones of your thoughtfulness",
        price: 410,
        image: "https://imgcdn.floweraura.com/charming-rose-bouquet-9830830fl-A.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 7,
        title: "Classic 10 Red Roses Bouquet",
        category: "flower",
        description: "When a bunch of 10 ravishing Red Roses come together in such beautiful wrapping, it defines prettiness! And as Red Roses in million little ways reveal the deepest secrets, this bouquet is sure to reveal yours. Perfect for occasions such as Date Night, Birthday, Valentine's, Anniversaries, Mother's Day and more to spread love.",
        price: 499,
        image: "https://imgcdn.floweraura.com/DSC_7677.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 8,
        title: "Beautiful Orchids Bouquet",
        category: "flower",
        description: "It's time to send some fresh flowers! This bright and beautiful orchids bouquet is a great way to congratulate someone special, celebrate an achievement, show your sympathy, or just to say thank you. Our Beautifully Bunch Orchids are absolutely gorgeous!",
        price: 1099,
        image: "https://imgcdn.floweraura.com/beautiful-orchids-bouquet-9862020fl-A_0.jpg?tr=w-264,dpr-1.5,q-70",
    },

    
    {
        id: 9,
        title: "Fresh Pink Roses With Vase",
        category: "flower",
        description: "Let every special moment with your loved one a gem. Melt his/her heart with the beautiful, fresh, and aromatic, pink roses in a vase. This lovely rose and vase arrangement works wonders to spruce up your relationship and adorn any space be it at the office or home.",
        price: 899,
        image: "https://imgcdn.floweraura.com/DSC_0597.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 10,
        title: "Bellina Purple Orchid Bouquet",
        category: "flower",
        description: "Among all the pretty little things in the world, this exquisite bouquet of orchids is surely one! Representing tenderness, this bunch of orchids are perfect for appreciating people for their good deeds and can be gifted across various special days. So, without thinking even twice, go ahead and gift it asap!.",
        price: 899,
        image: "https://imgcdn.floweraura.com/DSC_9605.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 11,
        title: "Pink Roses Bouquet",
        category: "flower",
        description: "Give this perfect bouquet of 10 exotic roses wrapped in ecstatic blue paper tied with ribbon to the lady of your dreams and express the love you have for her. Brighten up any dull day with this hand-picked selection of the most delicate buds for your woman.",
        price: 699,
        image: "https://imgcdn.floweraura.com/pink-super-love-bouquet-a.jpg?tr=w-264,dpr-1.5,q-70",
    },

    {
        id: 12,
        title: "Paradise Mixed Roses Bouquet",
        category: "flower",
        description: "This bouquet clipping 10 mixed roses together is a perfect representation of your love and care. Be it Birthday, Anniversaries, Mother's Day or any other occasion, express your bountiful wishes with this scintillating and love-filled bunch.",
        price: 699,
        image: "https://imgcdn.floweraura.com/DSC_7673_0.jpg?tr=w-264,dpr-1.5,q-70",
    },
]



display(flowerData)


function display(data){
    let flowerProduct = document.querySelector(".flower-product")

    data.forEach((elment,index)=>{
        let card = document.createElement("div")

        let image = document.createElement("img");
        image.src = elment.image;

        let title = document.createElement("h2");
        title.textContent = elment.title;


        let price = document.createElement("p");
        price.textContent = `$ ${elment.price}`;

        let btn = document.createElement("button");
        btn.textContent = "See Details"

        btn.addEventListener("click",()=>{
         let product = JSON.parse(localStorage.getItem("product")) || [];
            product.push(elment)
            localStorage.setItem("product",JSON.stringify(product));
        })
    
        card.append(image,title,price,btn)
        flowerProduct.append(card);
    })

    

}

