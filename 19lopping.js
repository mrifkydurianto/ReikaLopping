const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jumlah = 0;
let i = 1;
let n = 5;

function inputNilai() {
    if (i <= n) {
        rl.question("Masukkan nilai ke-" + i + ": ", function(nilai) {
            jumlah += Number(nilai);
            i++;
            inputNilai();
        });
    } else {
        let rata = jumlah / n;

        console.log("Jumlah nilai = " + jumlah);
        console.log("Rata-rata = " + rata);

        rl.close();
    }
}

inputNilai();