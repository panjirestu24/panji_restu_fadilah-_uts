// Array untuk nama-nama hari dan bulan dalam bahasa Indonesia
const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// Mendapatkan tanggal saat ini
const tanggalSekarang = new Date();

// Mendapatkan hari, tanggal, bulan, dan tahun
const namaHari = hari[tanggalSekarang.getDay()];
const tanggal = tanggalSekarang.getDate();
const namaBulan = bulan[tanggalSekarang.getMonth()];
const tahun = tanggalSekarang.getFullYear();

// Menyusun format tanggal lengkap
const tanggalLengkap = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;

// Menampilkan tanggal di elemen HTML dengan id 'tanggalSekarang'
document.getElementById("tanggalSekarang").innerText = ""
                                                         + tanggalLengkap;
