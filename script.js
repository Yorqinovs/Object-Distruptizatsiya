"use strict";

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
// };
// console.log(theif.height); //1.7

////--------------------------------------

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
// };
// console.log(theif.height);
// delete theif.jacket;
// console.log(theif); // delete

////--------------------------------------

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
// };
// console.log(Object.keys(theif).length); // uzunligini aqinlashda yordam beradi

////--------------------------------------

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
// };
// console.log(theif["colors"]["hair"]);
// console.log(Object.keys(theif).length);

// for (let key in theif) {
//   if (typeof theif[key] === "object") {
//     for (let i in theif[key]) {
//       console.log(`Property ${i} has value ${theif[key][i]}`);
//     }
//   } else {
//     console.log(`Property ${key} has value ${theif[key]}`);
//   }
// } // colors objectini ham ochib oldik ichidagi hair bn styleni chiqazib olish uchun

////--------------------------------------

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
// };
// let count = 0;
// for (let key in theif) {
//   count++;
// }
// console.log(count); //objectimizi uzunligini aniqlash

////--------------------------------------

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
//   howOut: function () {
//     console.log("Fast with help doors");
//   },
// };
// theif.howOut();

// const { hair, style } = theif.colors; // Distruptizatsiya
// //// const hair = theif.colors.hair;
// //// const style = theif.colors.style;

// console.log(hair);
// console.log(style);
