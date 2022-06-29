let i = 0;
var d = document.getElementById("btn+");
var a = document.createElement("div");
var o = document.getElementById("container");

document.body.before(d);
d.addEventListener("click", function () {
  var se = document.createElement("div");
  o.appendChild(se);
  se.setAttribute("class", "card");
  ////////////////////////
  let cardimg = document.createElement("img");
  cardimg.setAttribute("class", "card_img");
  cardimg.setAttribute("src", "data:image/png;base64,");
  se.appendChild(cardimg);
  /////////////////////////
  let cardName = document.createElement("div");
  cardName.setAttribute("class", "card_name");
  se.appendChild(cardName);
  ////////////////////////

  let cardDesc = document.createElement("div");
  cardDesc.setAttribute("class", "card_desc");
  se.appendChild(cardDesc);
  /////////////////////
  let btnDetails = document.createElement("button");
  btnDetails.setAttribute("class", "btn_details");
  se.appendChild(btnDetails);
  btnDetails.innerHTML = "details";
  ////////////////////
  let btnEdit = document.createElement("button");
  btnEdit.setAttribute("class", "btn_edit");
  se.appendChild(btnEdit);
  btnEdit.innerHTML = "edit";
  /////////////////////
  let btnDelete = document.createElement("button");
  cardDesc.setAttribute("class", "btn_delete");
  se.appendChild(btnDelete);
  btnDelete.innerHTML = "delete";
  fetch(`https://character-database.becode.xyz/characters`, {
    method: "POST",
  });
});
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
    let l = character[i].desc;
    const site = "http://127.0.0.1:5500/";
    const name = character[i].name;
    const desc = character[i].description;
    const img_solo = character[i].image;
    /////////////////////////////:

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
    let btnDetails = document.createElement("button");
    btnDetails.setAttribute("class", "btn_details");
    a.appendChild(btnDetails);
    btnDetails.innerHTML = "details";
    ////////////////////
    let btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "btn_edit");
    a.appendChild(btnEdit);
    btnEdit.innerHTML = "edit";
    /////////////////////
    let btnDelete = document.createElement("button");
    cardDesc.setAttribute("class", "btn_delete");
    a.appendChild(btnDelete);
    btnDelete.innerHTML = "delete";
    ////////////////////////////////:
    /////////addlistener
    //////////////////////////////
    btnDetails.addEventListener(
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
    btnDelete.addEventListener("click", async function () {
      console.log(l);
      if (confirm("Are you sure you want to delete this character?")) {
        fetch(`https://character-database.becode.xyz/characters/${l}`, {
          method: "DELETE",
        });
        location.reload;
        //        const attenti = await response.json();
        //        attenti.location.reload;
      } else {
        alert("This character has not been deleted");
      }
    });
  }
};

window.addEventListener("load", function () {
  s();
});
