//Promise Berantai adalah fitur untuk menghindari Calback Hell yaitu kondisi dimana saat menggunakan data dari fungsi lain untuk menjalankan fungsi lainnya. seperti Fungsi 2 berjalan jika data dari fungsi 3 sudah ada, lalu fungsi 1 bisa berjalan jika data dari fungsi 2 sudah tersedia
//Intinya Chain Promise berguna untuk menangani beberapa fungsi Asyncronous yang saling bergantung satu sama lain
//Contoh Chain Promise fungsi untuk menonton Bioskop

//Fungsi untuk mengambil uang
function ambilUang(total) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (total > 100) {
                reject(new Error('Saldo tidak cukup!!'))
            }

            resolve(total)
        }, 1500)

    })
}


function beliTiketBioskop(uang) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (uang < 50) {
                reject(new Error('Uang kurang!!'))
            }
            resolve('tiket-1A')
        }, 1000)
    })
}


function masukStudio(tiket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!tiket) {
                reject(new Error('Anda butuh tiket untuk masuk!!'))
            }
            resolve('Silahkan nikmati film-nya')
        }, 2000)
    })
}



function watchMovie() {
    ambilUang(40)
        .then((duit) => beliTiketBioskop(duit))
        .then((tiket) => masukStudio(tiket))
        .then((hasil) => console.log(hasil))
        .catch(err => console.log(err.message))
}


watchMovie()