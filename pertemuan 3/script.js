// function expression ==============
// let tampilNama = function(nama) {
//     console.log(nama);
// }
// tampilNama('Sakura');


// Arrow function ================
// let tampilNama = (nama) => {
//     console.log(nama);
// }
// tampilNama('Hana Kanawa');

// Arrow Function dipersingkat - dengan satu parameter ================
// let tampilNama = nama => console.log(nama);
// tampilNama('Ichijo Raku');

// Arrow Function dipersingkat - dengan dua parameter atau lebih ================
// let tampilNama = (nama, waktu) => {
//     console.log(`Halo ${nama}, selamat ${waktu}`);
// }
// tampilNama('Darmawan', 'Siang');

// Arrow Function dipersingkat - dengan tanpa parameter ================
// let hello = () => {
//     console.log('Hello World');
// }
// hello();

// implisit return =================================================================
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Naruhina'));

//  Studi kasus menghitung jumlah huruf pada array ==================================
// let mhs = ['Horimiya', 'Hinata', 'Kana'];
// let jumlahHuruf = mhs.map(function(nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

//  Studi kasus menghitung jumlah huruf pada array - dipersingkat ==================================
// let mahasiswa = ['Itsuki', 'Miku', 'Mitsuba'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Studi kasus mengembalikann nilai objek pada arrow funtion =======================================
let mahasiswa = ['Itsuki', 'Miku', 'Mitsuba'];
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.log(jumlahHuruf);
console.table(jumlahHuruf);