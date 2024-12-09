// Variables
var Total_Money = 100;

// Elements
var Main_Div = document.getElementById("Main_Div");

var Money_Text = document.getElementById("Money_Text");
var Amount_Input = document.getElementById("Amount_Input");
var Gamble_Button = document.getElementById("Gamble_Button");
var Gamble_All_Button = document.getElementById("Gamble_All_Button");

var Game_Icon_Button = document.getElementById("Game_Icon_Button");
var See_Proj_Button = document.getElementById("See_Proj_Button")

// Functions
function GetMultiplier(){
  let max = 2;
  let min = -2;

  let Multiplier = Math.round(Math.random() * (max - min + 1)) + min;

  return Multiplier;
}

function LooseGame(){
  let message = "You lost all of your money... But there's still hope. 99.9% of gamblers quit before they win big. Would you like to continue?";

  if (confirm(message) == true) {
    Total_Money = 100;
    RefreshMoney();
    window.location.replace();
  } else {
    alert("Ok then, stay a broke boy. Forever!");
    window.location.replace();
  }
  
}

function RefreshMoney() {
  Money_Text.innerHTML = "Money: $" + Total_Money;
}

function GetAmount() {
  let Amount = Number(Amount_Input.value);

  return Amount;
}

function Gamble(Amount) {
  if (Amount > Money) {
    Amount_Input.value = null;
    alert("ERROR! Can't gamble more money than you have!");
    
  } else if (Amount < 0){
    Amount_Input.value = null;

    alert("ERROR!, Can't gamble negative money!");
    
  } else {
    let Multiplier = GetMultiplier();// Math.round(Math.random() * (2.5 - -2 + 1)) + -2;
    Amount = Amount * Multiplier;

    Total_Money = Total_Money + Amount;
  }
}

function GambleAll(){
  let Multiplier = GetMultiplier();
  let Amount = (Total_Money * Multiplier);

  Total_Money = Total_Money + Amount;
}

// Events
Gamble_Button.addEventListener("click", function() {
  if (Total_Money <= 0 || Total_Money == null || Total_Money == undefined) {
    LooseGame();
  }
  
  let Amount_To_Gamble = GetAmount();
  Gamble(Amount_To_Gamble);

  RefreshMoney();

  if (Total_Money <= 0) {
    LooseGame();
  }
});

// Events

Gamble_All_Button.addEventListener("click", function() {
  if (Total_Money <= 0 || Total_Money == null || Total_Money == undefined) {
    LooseGame();
  }
  
  GambleAll();
  RefreshMoney();

  if (Total_Money <= 0 || Total_Money == null || Total_Money == undefined) {
    LooseGame();
  }
});

Game_Icon_Button.addEventListener("click", function() {
  window.open("https://AyameKajou56.github.io/Images/Logo.png", "_blank");
});

See_Proj_Button.addEventListener("click", function() {
  window.open("https://github.com/AyameKajou56/AyameKajou56.github.io");
});

window.addEventListener("keypress", function(Key){
  let GiveMoneyKey = '}';
  console.log(Key.key);

  if (Key.key === GiveMoneyKey){
    let Amount = this.prompt("How much money do you want?", "Ex: 999");

    Money = Number(Amount);
    RefreshMoney(Money);
  }else if (Key.key === 'R'){
    location.replace("https://shattereddisk.github.io/rickroll/rickroll.mp4");
  }
});