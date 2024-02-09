// Switch Case digunakan untuk melakukan perbandingan dengan kondisi yang banyak

let language = "English"
let gretting = null


switch (language) {
    case "English":
        gretting = "Good Morning";
        break; // Break digunakan untuk keluar dari proses Switch ketika sudah menemukan nilai yang cocok
    case "French":
        gretting = "Bonjour!";
        break;
    case "Russia":
        gretting = "Kack Djela"
        break;
    default: //Default untuk memberikan nilai jika semua kondisi tidak ada yang memenuhi, mirip seperti else di IF ELSE
        gretting = "Hallo"
                
}

console.log(gretting)