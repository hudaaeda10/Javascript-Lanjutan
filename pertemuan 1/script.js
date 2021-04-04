// Deklarasi Object

// 1. Deklarasi Object Iteration
// let mahasiswa1 = {
//     nama: 'Kana Hanazawa',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi
//         console.log(`halo ${this.nama} Selamat Makan`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'Hiromiya',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi
//         console.log(`halo ${this.nama} Selamat Makan`);
//     }
// }


// 2. Deklarasi Function
// function Mahasiswa(nama, porsi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = porsi;
//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
//     return mahasiswa;
// }
// let mahasiswa1 = Mahasiswa('Kana Hanazawa', 20);
// let mahasiswa2 = Mahasiswa('Horimiya', 20);



// 3. Constructor Function
// function Mahasiswa(nama, porsi) {
//         this.nama = nama;
//         this.energi = porsi;
//         this.makan = function(porsi) {
//             this.energi += porsi;
//             console.log(`Halo ${this.nama}, selamat makan!`);
//         }
//         this.main = function(jam) {
//             this.energi -= jam;
//             console.log(`Halo ${this.nama}, selamat bermain!`);
//         }
//     }
//     let mahasiswa1 = new Mahasiswa('Kana Hanazawa', 20);