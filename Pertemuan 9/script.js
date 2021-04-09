// callback - menjadikan function sebagai parameter
// Syncronous Callback
// function halo(nama){
//     console.log(`Halo nama saya ${nama}`);
// }
// function tampilkanNama(callback){
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }
// tampilkanNama(halo);


// menggunakan function anonimus================================================================
// function tampilkanNama(callback){
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }
// tampilkanNama(nama => alert(`Halo nama saya ${nama}`));


// Asyncorous Callback - mengguakan jquery murni =================================================================
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     // console.log(mhs);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {});
// console.log('selesai');





// Asyncronous menggunakan JQuery Eksternal - Ajax
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json', 
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => console.log(e.textContent)
});
console.log('selesai');


