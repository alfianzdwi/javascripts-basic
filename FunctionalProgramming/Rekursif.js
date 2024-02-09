//FP ada juga konsep Rekursif yaitu teknik pada sebuah function yang memanggil dirinya sendiri

//Non Rekursif
const countDown = start => {
    do {
        console.log(start)
        start -= 1;
    }
    while(start > 0)
}

countDown(10)


//Rekursif
const countDowns = start => {
    console.log(start)
    if(start > 0) countDown(start-1)
}

countDowns(10)