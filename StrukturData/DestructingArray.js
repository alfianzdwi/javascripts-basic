// Sama dengan Destructing Object bedanya hanya pada sintaks jika Object menggunakan kurung kurawal {}, maka para array menggunakan [] dan aturan indeks berlaku disini

const favorites = ["Football", "Basketball", "Volleyball", "Badminton", "Tenis"]
//let firstSport = "Swimming"

const [firstSport, secondSport, thirdSport, ,fiveSport] = favorites //Karena aturan Indeks berlaku jika tidak ingin full menulis Variabelnya bisa dikasih tanda koma saja lalu kosongin, yg penting sesuai indeks

console.log(secondSport)
console.log(fiveSport)




[firstSport] = favorites //Destructing Assigment, tanpa tanda kurung tidak seperti Object, berguna jika ingin menukar variabel