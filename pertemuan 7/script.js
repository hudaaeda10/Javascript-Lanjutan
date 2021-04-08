// for ... of
// pengulangan yang mengambil element array =================================================================
// const mhs = ['Kana', 'hanazawa', 'horimiya'];
// pengambilan element array biasa ======================
// for (i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// menggunaka forEach =================================
// mhs.forEach(m => console.log(m));

// menggunakan for of
// for (const m of mhs) {
//     console.log(m);
// }



//  Selain array for .. of dapat melooping string =================================================================
// const nama = "Kana Hanazawa";
// for(const n of nama) {          // melooping setiap abjad
//     console.log(n);
// }

// menampilkan element array dan index juga bisa dengan for .. of =================================================================
// gunakan cara biasa dulu
// const mhs = ['Kana', 'hanazawa', 'horimiya'];
// mhs.forEach((m, i) => {
//     console.log(`Mahasiswa dengan nama ${m} merupakan mahasiswa ke - ${i + 1}`);
// });

// dengan menggunakna for .. of
// [m, i] => indeks dulu baru value array
// for (const [m, i] of mhs.entries()) {
//     console.log(`Mahasiswa dengan nama ${i} merupakan mahasiswa ke - ${m + 1}`)
// }


// menggunakan NodeList =================================================
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// ambil element dari liNama dengan forEach
// liNama.forEach(n => console.log(n.innerHTML));

// ambil element dari liNama dengan For ... of
// for ( n of liNama) {
//     console.log(n.innerHTML);
// }



// penggunakan for .. of dapat digunakan di dalam arguments...
// function jumlahAngka() {
//     // console.log(arguments);
//     let jumlah = 0;
//     for ( n of arguments){
//         jumlah += n;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5, 6, 7));




// for .. in - pengulangan yang hanya bisa digunakan untuk mengambil element property object
const mhs = {
    nama: 'Kana Hanazawa',
    umur: 30,
    email: 'kana@gmail.com'
}
// mengambil property
// for ( n in mhs ) {
//     console.log(n);
// }

//  mengambil value dari property
for (n in mhs) {
    console.log(mhs[n]);
}