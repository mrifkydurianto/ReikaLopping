let huruf = ["a", "b", "c", "d", "e"];

for (let i = 0; i < huruf.length; i++) {
    let teks = "";

    for (let j = 1; j <= 5; j++) {
        teks += huruf[i] + " ";
    }

    console.log(teks);
}