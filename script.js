let i = 0;
const s = async () => {
  const response = await fetch(
    "https://character-database.becode.xyz/characters"
  );
  const character = await response.json().catch(console.error);
  console.log();
  console.log(character);
  console.log(character.length);
  for (i = 0; i < character.length; i++) {
    var a = document.createElement("div");
    document.body.appendChild(a);
    let b = document.getElementById("container").appendChild(a);
    a.className = "card";
    let k = character[i].name;
    a.addEventListener(
      "click",
      function () {
        location.href = "perso.html";
      },
      false
    );
    ////////////////////////

    let cardName = document.createElement("div");
    cardName.setAttribute("class", "card_name");
    a.appendChild(cardName);
    cardName.innerHTML = character[i].name;
    /////////////////////////:
    let cardDesc = document.createElement("div");
    cardDesc.setAttribute("class", "card_desc");
    a.appendChild(cardDesc);
    cardDesc.innerHTML = character[i].shortDescription;
    ////////////////////////
    let cardimg = document.createElement("img");
    cardimg.setAttribute("class", "card_img");
    cardimg.setAttribute("src", "data:image/png;base64," + character[i].image);
    a.appendChild(cardimg);
  }
};

window.addEventListener("load", function () {
  s();
});
var character;
console.log(character);
