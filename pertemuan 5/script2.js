//  1. HTML Bersarang  ==============================
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


//  2. Looping pada Template String  =================================================
// const mhs = [
//     {
//         nama: 'Kana Hanazawa', 
//         email: 'kana.hanazawa@gmail.com',
//     },
//     {
//         nama: 'Saitama', 
//         email: 'saitama@gmail.com',
//     },
//     {
//         nama: 'Horimiya', 
//         email: 'horimiya@gmail.com',
//     },
// ];
// const el = `
// <div class="mhs">
//     ${mhs.map( m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;



// 3. Conditional =================================================================
// ternary
// const lagu = {
//     penyanyi: 'Yaosobi',
//     judul: 'Yoru ni Kakeru',
//     feat: 'Kana'
// }
// const el = `
// <div class="lagu">
//     <li>Judul Lagu : ${lagu.judul}</li>
//     <li>Nama Penyanyi: ${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </div>`;



//  4. Nested =================================================================
// HTML Fragments Bersarang
const mhs = {
    nama: 'Kana Hanazawa', 
    semester: 5,
    mataKuliah: [
        'Pemrograman Web',
        'Analisis Database',
        'Pemrograman Python',
        'Analisis Object Oriented Programming',
        'Data Analisis'
    ]
}

function cetakMataKuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `
<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>
`;

document.body.innerHTML = el;