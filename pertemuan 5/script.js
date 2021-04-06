// Template String / Template Literals
// 1. Contoh pertama  =================================================================
// const nama = 'Kana Hanazawa';
// const umur = 33;
// console.log(`Halo nama saya ${nama}, saya berumur ${umur} tahun`);



// 2. Embed expression =================================================================
// console.log(`${1 + 1}`); // expression angka
// console.log(`${alert('OK')}`); // expression function
// const angka = 11;
// console.log(`${(angka % 2 == 0) ? 'genap' : 'ganjil'}`); // expression ternary



//  3. HTML Fragment 
// const mhs = {
//     nama: 'Kana Hanazawa',
//     umur: 33,
//     nrp: '01110217650',
//     email: 'kana@gmail.com'
// }
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;
// console.log(el);