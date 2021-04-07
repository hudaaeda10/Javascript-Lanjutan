// destructuring Variabel
// Destructuring array =================================================
// const perkenalan = ['halo', 'nama', 'saya', 'Kana Hanazawa'];
// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);
// console.log(nama);

// Skipping Items array =================================================================
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// Swap Items array =================================================================
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// return value pada function =================================================================
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);
// console.log(b);



// Rest Parameter - jika tidak tau banyak element arraynya =======================================================================
// const [a, ...value] = [1, 3, 2, 4, 6, 7, 9, 0];
// console.log(value);


// Destructuring Object - nama properti pada objek dengan nama variabel yang di destructuring harus sama =================================================================
// const mhs = {
//     nama: 'Kana Hanazawa',
//     umur: 20
// }
// const {nama, umur} = mhs;
// console.log(nama);

// Assignmen tanpa mendeklarasikan object =================================================================
// ({nama, umur} = {nama: 'Kana Hanazawa', umur: 20});
// console.log(umur);



// Assignment ke variabel baru =================================================================
// const mhs = {
//     nama: 'Kana Hanazawa',
//     umur: 20,
//     email: 'kana@gmail.com'
// }
// const {nama: n, umur: u, email: e} = mhs;
// console.log(e);
// console.log(n);



// Memberikan nilai default pada property =================================================================
// const mhs = {
//     nama: 'Kana Hanazawa',
//     umur: 20,
//     email: 'kana@gmail.com'
// }
// const {nama: n, umur: u, email: e, nrp = '01110217650', lahir = '1996-21-10'} = mhs;
// console.log(nrp);
// console.log(lahir);



//  Rest Parameter pada object =================================================================
// const mhs = {
//     nama: 'Kana Hanazawa',
//     umur: 20,
//     email: 'kana@gmail.com'
// }
// const {nama, ...value} = mhs;
// console.log(nama);
// console.log(value); // kembaliannya object


//  Mengembalikan field pada object dan mengirimkannya ke dalam function dalam bentuk parameter
const mhs = {
    id: 123,
    nama: 'Kana Hanazawa',
    umur: 20,
    email: 'kana@gmail.com'
}
function getIdMhs({id}) {             // 2. diambil property id saja
    return id;                              // 3. Mengembalikan property id
}
console.log(getIdMhs(mhs)); // 1. panggil dulu object nya



