//AsyncAwait adalah cara menangani proses Asyncronous layaknya proses Syncronous, jadi lebih mudah dibaca,, terhindar dari callback, lebih mudah mengelola error

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


//Async artinya memberitahu Javascripts bahwa Kode/Fungsi ini dijalankan secara Asyncronous
async function nontonBioskop(jumlah) {
    try {
        const duit = await ambilUang(jumlah) //Await artinya memberitahu Javascript untuk menunggu proses Promise selesai sebelum mengeksekusi kode baris selanjutnya
        const tiket = await beliTiketBioskop(duit)
        const hasil = await masukStudio(tiket)


        return hasil //Return berupa Promise untuk mendapatkan hasilnya harus dengan Then

    } catch (error) {
        throw error //Untuk mengontrol/mendapatkan status Promise
    }
}
 

console.log(nontonBioskop(60)) //Akan mencetak Promise bukan nilai yang dikembalikan oleh si Promise 

//Fungsi Async akan selalu mengembalikan sebuah Promise, jadi kita bisa pakai Then juga
nontonBioskop(40)
    .then((value) => console.log(value))
    .catch((err) => console.log(err.message))

/**
 * Contoh Kode menjalankan beberapa fungsi yang berjalan secara Asyncronous dengan Chain Promise
function watchMovie() {
    ambilUang(40)
        .then((duit) => beliTiketBioskop(duit))
        .then((tiket) => masukStudio(tiket))
        .then((hasil) => console.log(hasil))
        .catch(err => console.log(err.message))
}
 */