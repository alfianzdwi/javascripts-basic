function palindrome(word) {
    for (let i = 0; i <= word.length/2; i++) {
        iAwal = i
        iAkhir = word.length - i - 1

        if (word[iAwal] !== word[iAkhir]) {
            return false
        }
    }
    return true
}

console.log(palindrome("kodsok"))