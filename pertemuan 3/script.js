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
// let mahasiswa = ['Itsuki', 'Miku', 'Mitsuba'];
// let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// // console.log(jumlahHuruf);
// console.table(jumlahHuruf);



// melakukan this pada arrow function =================================================================
// constructor function
// let Mahasiswa = function(){
//     this.nama = 'Kana Hanazawa',
//     this.umur = 22,
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//     } 
// }
// const mahasiswa1 = new Mahasiswa();

// ====================================================================
//  pada penggunaan arrow function tidak dapat menggunakan this dalam mendeklarasikan function expression tetapi dengan function literation dapat mengguankan this

// let Mahasiswa = function(){
//         this.nama = 'Kana Hanazawa',
//         this.umur = 22,
//         this.sayHello = function(){
//             console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//         } 
//         setInterval(() => {
//             console.log(this.umur++); // menggunakan function literation dapat menggunakan this
//         }, 500);
//     }
//     const mahasiswa1 = new Mahasiswa();


// Studi kasus melakukan perubahan pada sebuah kotak ketika di click 
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout( () => {
        this.classList.toggle(dua); 
    }, 600);
})
