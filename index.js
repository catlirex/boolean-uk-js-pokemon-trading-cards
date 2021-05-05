// write your code here!
// This variable has the data you're working with

const imageArray = []

for(j = 0; j < data.length; j++){

    let cardsSection = document.querySelector(".cards")

    let articleCard = document.createElement("article");
    articleCard.classList.add("card")

    cardsSection.append(articleCard);

    // NAME
    let h2Name = document.createElement("h2")
    h2Name.setAttribute("class","card--title")
    h2Name.innerText = capitalizeFirstLetter(data[j].name);

    // IMAGE
    let imgCard = document.createElement("img")
    imgCard.classList.add("card--img")
    imgCard.setAttribute("id", j)
    let imgLink1 = data[j]["sprites"]["other"]["official-artwork"]["front_default"]
    let imgLink2 = data[j]["sprites"]["other"]["dream_world"]["front_default"]

    imageArray[j] = [imgLink1, imgLink2]


    imgCard.setAttribute("src", imgLink1)
    imgCard.setAttribute("width","256")

    // Toggle between two image
    imgCard.setAttribute("onclick", "changeImage(this.id)")

    // CARD ELEMENT ORDER
    let divCardText = document.createElement("div")
    divCardText.setAttribute("class","card--text")
    articleCard.prepend(h2Name, imgCard, divCardText )

    // STAT TEXT LOOP
    for(i = 0; i < 6; i++){
        var para = document.createElement("p");
        para.innerText = `${data[j]["stats"][i]["stat"]["name"].toUpperCase()}:${data[j]["stats"][i]["base_stat"]}`
        divCardText.append(para)
    }

    //GAME VERSION LIST
    const gameVersionList = []
    for (i = 0; i < data[j]["game_indices"].length; i++){
        let gameVersion = data[j]["game_indices"][i]["version"]["name"]
        gameVersionList.push(capitalizeFirstLetter(gameVersion))
    }

    let paraGameAppear = document.createElement("p")

    para.innerText = `Game Version:

    ${gameVersionList.join(" / ")}`

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function changeImage(j) {
    if (document.getElementById(j).src === imageArray[j][0]) {
        document.getElementById(j).src = imageArray[j][1];
    }
    else {
        document.getElementById(j).src = imageArray[j][0];
    }       
}
    
console.log(data);

console.log(imageArray)