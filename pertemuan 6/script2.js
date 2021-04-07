//  Studi kasus destructuring
// 1. kalkulasi array - tidak bisa acak dalam mendeklarasikan variabel baru =================================================================
// function kalkulasi (a, b) {
//     return [a+b, a-b, a*b, a/b];
// }
// const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// const [tambah, kurang, , bagi = 'tidak ada'] = kalkulasi(2, 3); // memberi nilai default 
// console.log(tambah);
// console.log(bagi);


//  2. agar bisa mendeklarasikan variabel barunya secara acak maka nilai kembalinya adalah object
// function kalkulasi (a, b) {
//     return {
//         tambah: a+b, 
//         kurang: a-b, 
//         bagi: a/b,
//         kali: a*b
//     }
// }
// const {tambah, bagi, kali, kurang} = kalkulasi(2, 3);
// console.log(bagi);
// console.log(tambah);



// 3. Destruction function argument =================================================================
//  pemecahan biasa
// const mhs1 = {
//     nama: 'Kana Hanazawa',
//     umur: 23,
//     email: 'kana@gmail.com'
// };
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));



// dengan destruction =================================================================
// function cetakMhs({nama, umur}){
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1));


// Lebih rumit dimana di dalam objek ada objek =================================================================
const mhs1 = {
    nama: 'Kana Hanazawa',
    umur: 23,
    email: 'kana@gmail.com',
    nilai: {
        uts: 98,
        uas: 99
    }
};
function cetakMhs({nama, umur, nilai: {uts, uas}}) {
        return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, Nilai uts saya ${uts} dan uas saya ${uas}`;
}
console.log(cetakMhs(mhs1));