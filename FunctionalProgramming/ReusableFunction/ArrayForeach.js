//ArrayForeach berguna untuk mengeluarkan nilai di dalam array dengan cara perulangan
const myFriend = ['Harry', 'Aldo', 'Ardhi', 'Swan']

//Normal
for (let i = 0; i < myFriend.length; i++){
    console.log(`Hello ${myFriend[i]}`)
}


for (let friend of myFriend) {
    console.log(`Hello ${friend}`)
}


//ForEach : Perlu diperhatikan ketika menggunakan ForEach tidak bisa menggunakan operator break atau continue, hal ini juga berlaku pada map dan filter
myFriend.forEach((friend) => console.log(`Hello ${friend}`))



