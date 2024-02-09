//FP ada juga konsep HighOrder Function yang mana kita bisa memperlakukan fungsi layaknya data
//Maksudnya kita bisa menjadikan fungsi sebuah paramater pada fungsi lainnya, menyimpan fungsi di variabel, hingga mengembalikan function di dalam function.
//Biasanya digunakan untuk aksi, event, menangani alur asyncronous menggunakan callback, membuat utilities seperti validation
const hello = () => {
    console.log('Hello!')
}

const say = (functionLain) => {
    functionLain();
}

const sayHello = () => {
    return () => {
        console.log('Hello!')
    }
}

hello()
say(hello)
sayHello()()