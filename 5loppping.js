let hasil = 0;
let teks = "";

for (let i = 1; i <= 5; i++) {
    hasil += i;
    teks += i;

    if (i < 5) {
        teks += " + ";
    }
}

console.log(teks + " = " + hasil);