// pasangkan ini ke website javascript visual Lizer untuk melihat langkah-langkah execution phase dan hoistingnya
function satu() {
    var nama = 'Kana Hanazawa';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Horimiya';
satu();
dua('Sakura');
console.log(nama);