// Deklarasi Object

// 1. Deklarasi Object Iteration
// Kelemahannya kurang efisien ketika membuat banyak object

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
//  Mendeklarasikan method-method secara berulang
// ============== SOLUSI ========================
//  Menggunakan Object Create untuk memanggil method yang sudah tersimpan di memory

// Buat object baru yang berisi method-method yang akan digunakan di object mahasiswa
const methodMahasiswa = {
        makan: function(porsi) {
            this.energi += porsi;
            console.log(`Halo ${this.nama}, selamat makan!`);
        },
        main: function(jam) {
            this.energi -= jam;
            console.log(`Halo ${this.nama}, selamat bermain!`);
        },
        tidur: function(jam){
            this.energi += jam * 2;
            console.log(`Halo ${this.nama}, selamat tidur!`);
        }
}

function Mahasiswa(nama, porsi) {
    // pasangkan Object.create()  pada variabel yang menyimpan object
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = porsi;

    return mahasiswa;
}
let mahasiswa1 = Mahasiswa('Kana Hanazawa', 20);
let mahasiswa2 = Mahasiswa('Horimiya', 20);







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