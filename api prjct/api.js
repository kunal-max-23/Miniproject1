const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const amt=document.querySelector("#searchBar");
const btn=document.querySelector(".search");
const exRate=document.querySelector(".rate");
const msg=document.querySelector(".msg");
const frcur=document.querySelector("#fromcur");
const tocur=document.querySelector("#tocur");
const dropdown=document.querySelector(".search select");

for(let select of dropdown ){
    for(let currCode in currencyList){
        let newoption=document.createElement("option");
        newoption.innerText=currCode;
        newoption.value=currCode;

        console.log(currCode);

    



    };

};

console.log(currencyList);