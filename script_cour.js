let pair="BTCRUB" //название пары
let urlBR = "https://api.binance.com/api/v3/ticker/price?symbol="+pair;
let urlBD = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
let urlER = "https://api.binance.com/api/v3/ticker/price?symbol=ETHRUB";
let urlED = "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT";
let urlDR = "https://api.binance.com/api/v3/ticker/price?symbol=USDTRUB";

let pBR=document.getElementById("priceBR");
let pBD=document.getElementById("priceBD");
let pER=document.getElementById("priceER");
let pED=document.getElementById("priceED");
let pDR=document.getElementById("priceDR");

let requestBR = new XMLHttpRequest();
requestBR.open("GET", urlBR, true);
let objBR;
requestBR.onload = function () {
  objBR = JSON.parse(requestBR.responseText);
};
requestBR.send();
let requestBD = new XMLHttpRequest();
requestBD.open("GET", urlBD, true);
let objBD;
requestBD.onload = function () {
  objBD = JSON.parse(requestBD.responseText);
};
requestBD.send();

let requestER = new XMLHttpRequest();
requestER.open("GET", urlER, true);
let objER;
requestER.onload = function () {
  objER = JSON.parse(requestER.responseText);
};
requestER.send();
let requestED = new XMLHttpRequest();
requestED.open("GET", urlED, true);
let objED;
requestED.onload = function () {
  objED = JSON.parse(requestED.responseText);
};
requestED.send();

let requestDR = new XMLHttpRequest();
requestDR.open("GET", urlDR, true);
let objDR;
requestDR.onload = function () {
  objDR = JSON.parse(requestDR.responseText);
};
requestDR.send();


function vidget() {
  let requestBR = new XMLHttpRequest();
  requestBR.open("GET", urlBR, true);
  requestBR.onload = function () {
    objBR = JSON.parse(requestBR.responseText);
  };
  requestBR.send();
  price=objBR["price"];
  pBR.innerHTML=parseFloat(price).toLocaleString();
  
  let requestBD = new XMLHttpRequest();
  requestBD.open("GET", urlBD, true);
  requestBD.onload = function () {
    objBD = JSON.parse(requestBD.responseText);
  };
  requestBD.send();
  price=objBD["price"];
  pBD.innerHTML=parseFloat(price).toLocaleString();
  
  let requestER = new XMLHttpRequest();
requestER.open("GET", urlER, true);
requestER.onload = function () {
  objER = JSON.parse(requestER.responseText);
};
requestER.send();
price=objER["price"];
  pER.innerHTML=parseFloat(price).toLocaleString();

let requestED = new XMLHttpRequest();
requestED.open("GET", urlED, true);
requestED.onload = function () {
  objED = JSON.parse(requestED.responseText);
};
requestED.send();
price=objED["price"];
  pED.innerHTML=parseFloat(price).toLocaleString();

let requestDR = new XMLHttpRequest();
requestDR.open("GET", urlDR, true);
requestDR.onload = function () {
  objDR = JSON.parse(requestDR.responseText);
};
requestDR.send();
price=objDR["price"];
  pDR.innerHTML=parseFloat(price).toLocaleString();


  setTimeout(vidget, 2000); //повторяем каждые 1000 мс = 1 с
}
setTimeout(vidget, 1000);