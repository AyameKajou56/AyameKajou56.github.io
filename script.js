// Variables
var Total_Money = null;

// Elements
var Main_Div = document.getElementById("Main_Div");

var Money_Text = document.getElementById("Money_Text");
var Amount_Input = document.getElementById("Amount_Input");
var Gamble_Button = document.getElementById("Gamble_Button");
var Gamble_All_Button = document.getElementById("Gamble_All_Button");

var Game_Icon_Button = document.getElementById("Game_Icon_Button");
var See_Proj_Button = document.getElementById("See_Proj_Button");
var Update_Log_Button = document.getElementById("Update_Log_Button");

// Functions
function SaveGameData(){
  window.localStorage.setItem("Money", Total_Money)
}

function LoadGameData(){
  Total_Money = parseInt(window.localStorage.getItem("Money")) || 100;
  RefreshMoney();
}

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
    SaveGameData();
    RefreshMoney();
    window.location.replace();

  } else {

    alert("Ok then, stay a broke boy. Forever!");
    SaveGameData();
    window.location.replace();

  }
  
}

function RefreshMoney() {
  Money_Text.innerHTML = "Money: $" + Total_Money;
}

function GetAmount() {
  let Amount = parseInt(Amount_Input.value);

  return Amount;
}

function Gamble(Amount) {
  if (Amount > Total_Money) {
    Amount_Input.value = null;
    alert("ERROR! Can't gamble more money than you have!");
    
  } else if (Amount < 0){
    Amount_Input.value = null;

    alert("ERROR!, Can't gamble negative money!");
    
  } else {
    let Multiplier = GetMultiplier();// Math.round(Math.random() * (2.5 - -2 + 1)) + -2;
    Amount = Amount * Multiplier;

    Total_Money = Total_Money + Amount;
    SaveGameData();
  }
}

function GambleAll(){
  let Multiplier = GetMultiplier();
  let Amount = (Total_Money * Multiplier);

  Total_Money = Total_Money + Amount;
  SaveGameData();
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

// Other

LoadGameData();

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
  let link = window.location;
  window.open(String(link).replace("/index.html", "/Images/Logo.png"));
});

See_Proj_Button.addEventListener("click", function() {
  window.open("https://github.com/AyameKajou56/AyameKajou56.github.io");
});

Update_Log_Button.addEventListener("click", function() {
  let link = window.location;
  window.open(String(link).replace("/index.html", "/Pages/Update_Log/Update.html"));
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