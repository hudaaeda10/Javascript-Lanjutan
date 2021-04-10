// Promise - merupakan Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asyncronous di masa yang akan datang
// janji (ditepati / diingkari)
// sebutan javascript : states(fulfilled / rejected / pending)
// callback ( then / catch / finally)



//  contoh 1 =================================================
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji ditepati');
//     } else {
//         reject('Janji di ingkari');
//     }
// });
// janji1 
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('Not OK! : ' + response));



// contoh 2 =================================================
// let ditepati = false;
// let janji2 = new Promise((resolve, reject) =>{
//     if (ditepati) {
//         setTimeout(() =>{
//             resolve('Janji di tepati selang beberapa waktu');
//         }, 1000);
//     } else {
//         setTimeout(() =>{
//             reject('Janji Diingkari selang beberapa waktu');
//         }, 500);
//     }
// });
// console.log('mulai');
// // console.log(janji2.then( () => console.log(janji2))); // dijalnankan secara detail dari pending baru selesai
// janji2
//     .finally(() => console.log('Tunggu')) // apapun isi dari let sebelum dieksekusi resolve dan reject maka jalan kan function finally terlebih dahulu
//     . then( (response) => console.log('Ok! : ' + response))
//     .catch((response) => console.log('Not Ok! : ' + response));
// console.log('selesai');




// contoh 3 - Promise.all()   =============================================================
const movie = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            Judul: "Kimetsu No Yaiba",
            Producer: "Kana Hanazawa",
            Actor: ["Horimiya", "Bakugo"]
        }]);
    }, 1000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            suhu: 36,
            lokasi: "Semarang",
            negara: "Indonesia"
        }]);
    });
});
// cara biasa =================================================================
// movie.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// cara Promise All =================================================================
// Promise.all([movie, cuaca])
//     .then(response => console.log(response));
// Jika ingin dipisah =======================
// Promise.all([movie, cuaca])
//     .then(response => {
//         const [movie, cuaca] = response;
//         console.log(movie);
//         console.log(cuaca);
//     });
