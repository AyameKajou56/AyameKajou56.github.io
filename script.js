// Variables
var Money = 100;

// Elements
var MainDiv = document.getElementById("Main_Div");

var MoneyText = document.getElementById("Money_Text");
var AmountInput = document.getElementById("Amount_Input");
var GambleButton = document.getElementById("Gamble_Button");
var GambleAllButton = document.getElementById("Gamble_All_Button");
var GameIconButton = document.getElementById("Game_Icon_Button");

// Functions
function GetMultiplier(){
  let max = 10
  let min = -2

  let Multiplier = Math.round(Math.random() * (max - min + 1)) + min;

  return Multiplier
}

function LooseGame(){
  let message = "You lost all of your money... But there's still hope. 99.9% of gamblers quit before they win big. Would you like to continue?";
  if (confirm(message) == true){
    location.reload();
  } else{
    alert("Ok then, stay a broke boy. Forever!");
  }
  
}

function RefreshMoney(Money) {
  MoneyText.innerHTML = "Money: $" + Money;
}

function GetAmount() {
  let Amount = Number(AmountInput.value);

  return Amount;
}

function Gamble(Amount) {
  if (Amount > Money) {
    AmountInput.value = null;
    alert("ERROR! Can't gamble more money than you have!");
    
  } else if (Amount < 0){
    AmountInput.value = null;
    console.log("Sigma");
    alert("ERROR!, Can't gamble negative money!");
    
  } else {
    let Multiplier = GetMultiplier();// Math.round(Math.random() * (2.5 - -2 + 1)) + -2;
    Amount = Amount * Multiplier;

    Money = Money + Amount;
  }
}

function GambleAll(AllMoney){
  let Multiplier = GetMultiplier();
  let Amount = (AllMoney * Multiplier);

  Money = Money + Amount;
}

// Events
GambleButton.addEventListener("click", function() {
  if (Money <= 0){
    LooseGame();
  }
  
  let AmountToGamble = GetAmount();
  Gamble(AmountToGamble);
  RefreshMoney(Money);

  if (Money <= 0){
    LooseGame();
  }
});

GambleAllButton.addEventListener("click", function(){
  if (Money <= 0 || Money == undefined){
    LooseGame();
  }
  
  GambleAll(Money);
  RefreshMoney(Money);

  if (Money <= 0 || Money == undefined){
    LooseGame();
  }
});

GameIconButton.addEventListener("click", function(){
  location.replace("https://AyameKajou56.github.io/Images/Logo.png");
});