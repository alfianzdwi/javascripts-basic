//Deklaratif atau FP adalah konsep pemrograman dimana mengutamakan apa yang ingin diselesaikan/dicapai dibanding bagaimana cara menyelsaikan atau mencapainya

const names = ['Harry', 'Adoy', 'Swan', 'Ardhi', 'Alfian']


//Contoh Imperatif Not FP, Memikirikan langkah-perlangkah
const newNameWithExcMark = []

for (let i = 0; i < names.length; i++){
    newNameWithExcMark.push(`${names[i]}!`)
}

console.log(newNameWithExcMark)


//Contoh Deklaratif lebih to the point, fokus pada apa yang ingin kita selesaikan
const newNameWithExcMarks = names.map((name) => `${name}!`)

console.log(newNameWithExcMarks)