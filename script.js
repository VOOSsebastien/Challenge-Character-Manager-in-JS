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
    //ici site
    const site = "http://127.0.0.1:5500/";
    const name = character[i].name;
    const desc = character[i].description;
    const img_solo = character[i].image;
    a.addEventListener(
      "click",
      function () {
        const url = site + name;
        console.log(character);
        const solo = window
          .open(url, "_self")
          .document.write(
            "<body id='body'class='card_solo'><link rel='stylesheet' href='src/css/style.css' /><a class='refresh_cross' href = '' onclick = 'Refresh()'>X</a><h1 class='card_name_solo'>" +
              name +
              "</h1><img class='card_img_solo' src=data:image/png;base64," +
              img_solo +
              "><div class='card_desc_solo'>" +
              desc +
              "</div></body>"
          );
      },
      false
    );
    ////////////////////////
    let cardimg = document.createElement("img");
    cardimg.setAttribute("class", "card_img");
    cardimg.setAttribute("src", "data:image/png;base64," + character[i].image);
    a.appendChild(cardimg);
    /////////////////////////
    let cardName = document.createElement("div");
    cardName.setAttribute("class", "card_name");
    a.appendChild(cardName);
    cardName.innerHTML = character[i].name;
    ////////////////////////

    let cardDesc = document.createElement("div");
    cardDesc.setAttribute("class", "card_desc");
    a.appendChild(cardDesc);
    cardDesc.innerHTML = character[i].shortDescription;
    /////////////////////
    let btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "card_desc");
    a.appendChild(cardDesc);
    cardDesc.innerHTML = character[i].shortDescription;
    /////////////////////
    let btnDlete = document.createElement("button");
    cardDesc.setAttribute("class", "card_desc");
    a.appendChild(cardDesc);
    cardDesc.innerHTML = character[i].shortDescription;
  }
};

window.addEventListener("load", function () {
  s();
});
