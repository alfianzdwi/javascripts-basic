const user = {
    id: 14,
    nickname: "Alfian",
    fullname: "Alfian Dwi Prayoga"
}


//Memanfaatkan Destructing Object untuk Parameter atau Argument Function
function introduce({ nickname, fullname }) {
    console.log(`My name is ${nickname} and My Fullname is ${fullname}`)
}

introduce(user) //Memasukkan Object nya

//Fungsi pada Javascript tidak memeriksa Jumlah ataupun Tipe dari argument/parameter, artinya kita bisa memasukkan argumen walaupun tidak sesuai paramater yang telah dibuat
function perkalian(a, b = 2) { //Meberikan nilai Default untuk jaga-jaga agar tidak undefined jika argumen tidak sesuai
    return a * b
}

console.log(perkalian(2))


//Rest parameter: Digunakan ketika kitak tidak tau pasti berapa argumen yang akan dimasukkan nantinya
function sum(...numbers) {
    let result = 0
    for (item of numbers) {
        result += item
    }
    return result
}


console.log(sum(5, 10, 15, 20))
