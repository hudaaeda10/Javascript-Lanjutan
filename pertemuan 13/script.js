// tanpa asyncronous await
function cobaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('selesai')
        }, 2000);
    });
}
// const coba = cobaPromise();
// console.log(coba);
// coba.then(coba => console.log(coba)); // bisa dilakukan tanpa await

// menjalankan function dengan async =================================================================
// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }
// cobaAsync();



// menjalankan function tanpa async dengan adanya reject
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 2000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, 2000);
        } else {
            reject('kelamaan!');
        }
    });
}
// menjalankan function tanpa async dengan adanya reject ====== =========
// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));


// menjalankan dengan function async await
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err);
    }
}
cobaAsync();