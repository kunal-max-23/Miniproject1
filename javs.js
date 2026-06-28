//node app.js
//console.log("my name is kunal");
//var age=26;
//console.log(age);
//function Solve(){
//var age=26;
//console.log(age + 4);

//}
//Solve();
//const age=20;
//console.log(age);
//age=56;
//console.log(age);

//let age =5;
//let q=(age>20)?'vote':'cant vote'
//console.log(q);

//console.log(10<<2);
// let ar=[200,300,600,900];
// console.log(ar);
// //console.log(ar.length);
// //for(let i=0;i<ar.length; i++){
//  //   console.log(ar[i]);
//  //let dv=0;
// //for(let i=0; i<ar.length;i++){

//   //  ar[i]=ar[i]-(ar[i]*(10/100));
// //}
// //console.log(ar);

// let dr=[90,80,70];
// let bi=ar.concat(dr);

// //forEach loop => higher order function due to callback
// ar.forEach((val)=>{
// console.log(val)})

// dr.forEach((val)=>{
//   console.log(val**2)
// })

// console.log(bi);
// //unshift=add to start
// //shift= delete from start
// //slice()=return a piece of array
// //splice()=change original array add remove replace

// ar.splice(2,1,4);
// ar.shift();
// ar.push(2);
// console.log(ar);

// //arrowfunc
// let arrowsum=(a,b) =>{
//   console.log(a+b);
// }

// arrowsum(8,9);
// let arrowmod=(a,b)=>{
//   console.log(a%b);
// }
// arrowmod(100,9);

// function countvowel(str){
//   let count=0;
//   for(let char of str){
//     if(char=="i"||char=="I"||char=="A"||char=="a"||char=="o"||char=="O"||char=="U"||char=="u"||char=="E"||char=="e"){
//       count++;
//     }
//   }
// // console.log(count);
// }
// countvowel("mainmardungatumhe");

//methods in js
//filter
// //map
// //reduce

// let btn=document.querySelector("#mode");
// let body= document.querySelector("body");
// let curmode="light";

// btn.addEventListener("click",()=>{
//   if (curmode==="light"){
//     curmode="dark";
//     document.querySelector("body").style.backgroundColor="black";
//   }else{
//     curmode="light";
//     document.querySelector("body").style.backgroundColor="white";


//   }
//   console.log(curmode);
// });

// let a=prompt("enter value of a");
// let b=prompt("enter value of b");

// console.log(a+b);

// let input = prompt("Enter a number:");
// console.log(typeof input);
// console.log(input + 5); 

 const countryList = [
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
 ];