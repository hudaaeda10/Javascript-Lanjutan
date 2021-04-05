// ambil semua video - berdasarkan atribut yang memiliki data-duration - dibungkus dalam array
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya javascript
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi waktu dari masing-masing video
.map(item => item.dataset.duration)

// ubah durasi menjadi float dan ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlah semua detik - menggunakan reduce
.reduce((total, detik) => total + detik);

// ubah formatnya menjadi jam, menit dan detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam*3600; // mengurangi waktu setelah mendapatkan nilai jam
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Pasangkan dengan DOM
const pDurasi = document.querySelector('.total-video');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmlVideo = document.querySelector('.jumlah-video');
pjmlVideo.textContent = `${jmlVideo} Video`;