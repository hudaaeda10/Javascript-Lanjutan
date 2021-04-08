// Spread Operator (...)
// memecah iterables menjadi element
// const mhs = ["Kana", "Hanazawa", "Horimiya"];
// console.log(...mhs);    


// 1. Menggabungkan array
// const mhs = ["Kana", "Hanazawa", "Horimiya"];
// const dosen = ["Darmina", "Kimmich", "Muller"];
// // const orang = [...mhs, ...dosen];
// const orang = [...mhs,"Aji", ...dosen];  // menambah element array diantara gabungan
// console.log(orang);



// 2. meng-copy array
// const mhs = ["Kana Hanazawa", "Horimiya", "Darmina"];
// const mhs1 = [...mhs] ;
// // console.log(mhs1);
// mhs1.push("Aji");  // kita tambah mhs1 
// console.log(mhs1); // merubah mhs1 tapi tidak merubah mhs



//  3. mengambil element li menjadi array
// const liMhs = document.querySelectorAll('li');
// console.log(liMhs);
// membuat li menjadi array - cara for =================================================================
// const mhs = [];
// for (i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// membuat i menjadi array - cara map
// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(n => n.textContent);
// console.log(mhs);



// 4. membuat kata menjadi besar ketika di sorot
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// console.log(huruf);
nama.innerHTML = huruf;
