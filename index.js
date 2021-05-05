// write your code here!
// This variable has the data you're working with

for(j = 0; j < data.length; j++){

let cardsSection = document.querySelector(".cards")

let articleCard = document.createElement("article");
articleCard.setAttribute("class", "card")

cardsSection.append(articleCard);

let h2Name = document.createElement("h2")
h2Name.setAttribute("class","card--title")
h2Name.innerText = data[j].name;

let imgCard = document.createElement("img")
imgCard.setAttribute("class", "card--img")
let imgLink = data[j]["sprites"]["other"]["official-artwork"]["front_default"]
imgCard.setAttribute("src", imgLink)
imgCard.setAttribute("width","256")

let divCardText = document.createElement("div")
divCardText.setAttribute("class","card--text")

articleCard.prepend(h2Name, imgCard, divCardText )

// STAT TEXT LOOP
for(i = 0; i < 6; i++){
var para = document.createElement("p");
para.innerText = `${data[j]["stats"][i]["stat"]["name"].toUpperCase()}:${data[j]["stats"][i]["base_stat"]}`
divCardText.append(para)
}

}

// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS



console.log(data);
