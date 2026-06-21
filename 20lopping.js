// Nama Soal : Tabel Perkalian
// Tanggal Pembuatan : 18 Juni 2026
// Nama Pembuat-Kelas : Muhamad Rifky Durianto - X PPLG 3

let n = 8; // ubah angka ini kalau mau lebih besar/kecil

for (let i = 1; i <= n; i++) {
    let baris = "";

    for (let j = 1; j <= n; j++) {
        baris += (i * j) + " ";
    }

    console.log(i + " " + baris);
}