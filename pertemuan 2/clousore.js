//  Mengembalikan nilai fungsi dari fungsi yang di jalankan
// Clousore merupakan mengambil nilai dari parent function
//  Clousore 2.2 =================================================================
// function ucapkanSalam(waktu){
//     return function (nama) {
//         console.log(`Halo ${nama}, selamat ${waktu} semoga hari mu menyenangkan`);
//     }
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatSore = ucapkanSalam('sore');
// selamatPagi('Sakura');
// console.dir(selamatPagi('Kana Hanazawa'));

// Clousure Private =================================================================
let add = (function() {
    counter = 0;
    return function () {
        return ++counter;
    }
})();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());