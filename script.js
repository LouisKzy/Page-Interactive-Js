
// ---------------------- N°1 Footer ----------------------
var footerSelector = document.querySelector("footer");
var cliqueCount = 1;

function footerClickCount() {
  console.log("clic numéro " + cliqueCount);
  cliqueCount ++;
};


footerSelector.addEventListener("click", footerClickCount);

// ---------------------- N°2 Hamurger Menu ----------------------

var navbarHeaderSelector = document.getElementById("navbarHeader");
var navbarButtonSelector = document.getElementsByClassName("navbar-toggler")[0];
function toggleCollapse() {
  navbarHeaderSelector.classList.toggle("collapse");
};
navbarButtonSelector.addEventListener("click", toggleCollapse);
// console.log(navbarButtonSelector);
// console.log(navbarHeaderSelector);
// ---------------------- N°3 Edit première card ----------------------

var card1 = document.getElementsByClassName("card")[0];
var editButton = card1.getElementsByClassName("btn-outline-secondary")[0];

function changeTextColor() {
  card1.style.color = "red";
};

editButton.addEventListener("click", changeTextColor);
// console.log(card1);

// ---------------------- N°4 Edit deuxième card ----------------------

var card2 = document.getElementsByClassName("card")[1];
var editButton2 = card2.getElementsByClassName("btn-outline-secondary")[0];
// console.log(editButton2);
function changeTextColor2() {
  if (card2.style.color === "green") {
    card2.style.color = "";
  } else {
    card2.style.color = "green";
  }
};

editButton2.addEventListener("click", changeTextColor2);
// console.log(card2);

// ---------------------- N°5 Fonction Nuke CDN Bootstrap ----------------------
var linkSelectorBootstrap = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
var navbarSelected = document.getElementsByClassName("collapse")[0];
// console.log(navbarSelected);
function bootstrapAlternate() {
  if (linkSelectorBootstrap.disabled === true) {
    linkSelectorBootstrap.disabled = false;
  } else if (linkSelectorBootstrap.disabled === false) {
    linkSelectorBootstrap.disabled = true;
  }
};
navbarSelected.addEventListener("dblclick", bootstrapAlternate);

// ---------------------- N°6 View cards modif ----------------------

// function viewCardModifications() {
var cardList = Array.from(document.getElementsByClassName("card"));
// console.log(cardList);
cardList.forEach(function(card) {
  let selectImg = card.querySelector("img");
  console.log(selectImg)

  let selectFirstViewButton = card.querySelector(".btn-success");
  console.log(selectFirstViewButton)

  let selectCardParagraph = card.querySelector("p");

  selectFirstViewButton.addEventListener("mouseover", function() {
    selectCardParagraph.classList.toggle("collapse")
    console.log()
    if (selectCardParagraph.classList.contains("collapse")) {
    
    selectImg.style.width = "20%";
    } else {
      selectImg.style.width = "";
    };
  });
});

// ---------------------- N°7 Button WTF ==> ----------------------

var selectButtonArrowRight = document.getElementsByClassName("btn-secondary")[0];
// console.log(selectButtonArrowRight);

function wtfButton() {
  selectButtonArrowRight.addEventListener("click",function(){
    // chope toutes les cards dans une liste 
    var getCards = document.getElementsByClassName("card");
    // console.log(getCards);
    // console.log(getCards[0].parentNode.parentNode);
    var getParent = getCards[0].parentNode.parentNode;

    // Si t'es bon sa bouge le dernier card actuel en première position
    getParent.insertBefore(getParent.lastElementChild, getParent.firstElementChild);
    
  })
};
wtfButton();





