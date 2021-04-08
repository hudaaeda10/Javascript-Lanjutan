// Rest Parameters

// function myFunc(a, b, ...myArgs) {
    // return `a = ${a}, b = ${b}, else = ${myArgs}`;
// }
// console.log(myFunc(1, 3, 4, 6 ,7 ,8, 9));

// mengembalikan arguments menjadi array
// function myFunc(...myArgs) {
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }
// console.log(myFunc(1, 3, 4, 6 ,7 ,8, 9));




// penjumlahan angka =================================================================
// function jumlah(...angka) {
//     // menggunakan for of =======
//     // let h = 0;
//     // for (const a of angka){
//     //     h += a;
//     // }
//     // return h;

//     // menggunakan reduce =========
//     return angka.reduce((a, i) => a + i);
// }
// console.log(jumlah(1, 2, 3, 4, 5, 6, 7, 8, 9));



// array desctructions =================================================================
// const kelompok = ["Aelita", "Jeremy", "Odd", "Ulrich", "Yumi"];
// const [ketua, wakil, ...anggota] = kelompok;
// console.log(ketua);  
// console.log(wakil);  
// console.log(anggota);  




// Object Destructions =================================================================
// const team = {
//     pm: 'Aelita Stone',
//     frontEnd: 'Odd',
//     backEnd: 'Jeremy',
//     ux: 'Ulrich',
//     ui: 'Yumi'
// }
// const {pm, ...developer} = team;
// // console.log(pm);
// console.log(developer);





//  filter
function filterBy(type, ...values) {
    return values.filter((n => typeof n === type));
}
// console.log(filterBy('number', 1, 3 ,'Darmin', true, 13, 21, false, 'sakinah'));
// console.log(filterBy('boolean', 1, 3 ,'Darmin', true, 13, 21, false, 'sakinah'));
console.log(filterBy('string', 1, 3 ,'Darmin', true, 13, 21, false, 'sakinah'));