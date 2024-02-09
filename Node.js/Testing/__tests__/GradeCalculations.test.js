const { averageExams,  isStudentPassExam} = require('../GradeCalculation')


//Unit Testing
/*test('Ini harusnya menghasilkan nilai rata-rata yang benar', () => {
    const myValues = [60, 70, 90, 80, 100]

    expect(averageExams(myValues)).toEqual(80)
})

test('Harusnya gagal karena tipe data tidak semua number ', () => {
    const myValues = [60, 'a', 90, 80, 100]
    expect(() => averageExams(myValues)).toThrow();
})*/


//Integration Testing
describe('Kalkulasi nilai', () => {
    test('Ini harusnya menghasilkan nilai rata-rata yang benar', () => {
        const myValues = [60, 70, 90, 80, 100]
    
        expect(averageExams(myValues)).toEqual(80)
    })



    test('Ini harusnya menghasilkan true, atau lulus', () => {
        const myValues = [60, 70, 90, 80, 100]
    
        expect(isStudentPassExam(myValues,  'Alfian')).toEqual(true)
    })


    test('Ini harusnya menghasilkan false, atau tidak lulus', () => {
        const myValues = [60, 70, 30, 50, 40]
    
        expect(isStudentPassExam(myValues,  'Alfian')).toEqual(false)
    })
})