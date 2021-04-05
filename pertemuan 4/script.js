let angka = [-1, 8, 9, 1, 4, -5, -4, 3 , 2, 9];
// melakukan pengecheckan angka yang > 3
// menggunakan for =================================================================
// let hasil = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3){
//         hasil.push(angka[i]);
//     }
// }
// console.log(hasil);


// Menggunakan Filter =================================================================
// const newAngka = angka.filter(function(a) {
//     return a >= 3;
// });
// console.log(newAngka);
// Menggunakan arrow function =================================================================
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);



// Menggukan MAP untuk memasukkan fungsi ke dalam masing-masing element array =================================================================
// const newAngka = angka.map(a => a*2);       // mengalikan masing-masing element array dengan dikalikan dua
// console.log(newAngka);



// Menggunakan reduce - Menambahkan setiap element array sebelumnya =================================================================
// const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue);
// console.log(newAngka);



//  method chaining =================================================
// menggabungkan dengan method2 sebelumnya - cari angka, kalikan angka 5 dan tambahkan angka
const hasil = angka.filter(a => a>= 3)
    .map(a => a *5)
    .reduce((acc, cur) => acc + cur);
    console.log(hasil);