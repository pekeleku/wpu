function segitiga(baris) {
  let bintang = "";
  for (let i = 0; i <= baris; i++) {
    for (let y = baris; y >= i; y--) {
      bintang += "*";
    }
    bintang += "\n";
  }
  return bintang;
}
console.log(segitiga(5));

// let bintang = "";
// for (let i = 0; i < 5; i++) {
//   for (let y = 5; y > i; y--) {
//     bintang += "*";
//   }
//   bintang += "\n";
// }
// console.log(bintang);

// let bintang = "";
// for (let i = 1; i <= 3; i++) {
//   for (let y = 1; y <= 4; y++) {
//     if ((i == 2 && y == 2) || (i == 2 && y == 3) || (i == 2 && y == 4)) {
//       bintang += " ";
//     } else {
//       bintang += "*";
//     }
//   }
//   bintang += "\n";
// }
// console.log(bintang);
