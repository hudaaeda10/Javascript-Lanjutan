// tagged templates
const nama = 'Kana Hanazawa';
const umur = 33;
const email = 'kana.hanazawa@gmail.com';

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ``}`;
//     // });
//     // return result;

//     // menggunakan reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }
// const str = coba`Halo nama saya ${nama}, umur saya ${umur} tahun`;
// console.log(str);



//  Studi kasus melakukan highlighting pada tiap expression =================================================================
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str} <span class="hl"> ${values[i] || ''} </span>`, '');
}
const str = highlight`Halo nama saya ${nama}, umur saya ${umur} tahun dan emailnya adalah : ${email}`;
document.body.innerHTML = str;