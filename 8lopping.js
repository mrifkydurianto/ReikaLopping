let hasil = 0;
let teks = "";

for (let i = 2; i <= 10; i += 2) {
    hasil += i;
    teks += i;

    if (i < 10) {
        teks += " + ";
    }
}

console.log(teks + " = " + hasil);