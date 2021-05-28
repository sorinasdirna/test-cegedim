/**Se dă un șir de numere aleatorii cuprinse între 100 și 999 inclusiv. Spunem că un număr
aflat în intervalul [100, 200) apaține clasei 100, un număr aflat în intervalul [200, 300)
aparține clasei 200 și tot așa pentru orice număr din intervalul [100, 999].
Să se calculeze cel mai mare număr al fiecărei clase din șirul dat.*/


let inputArr = [117, 120, 130, 280, 301, 780, 510, 505, 605, 720, 300, 230, 210, 290];
//initializez array de output cu valoarea 0 astfel cand gasesc un maxim sa il compar cu  valoarea anterioara - 10 pozitii exact cate intervale sunt
let output = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//parcurgem array-ul si adaugam in output pe pozitia al carui interval  corespunde maximul gasit
for (let i = 0; i < inputArr.length; i++) {
    let element = inputArr[i];
    let position = Math.floor(element / 100);
    if (output[position] < element) {
        output[position] = element;
    }
}

//Elimin pozitiile din array-ul de output care au valoarea 0
for (let i = 1; i < output.length; i++) {
    if (output[i] === 0) {
        continue;
    }

    let firstNumber = (i) * 100;
    let secondNumber = firstNumber + 99;
    let message = "For interval of " + firstNumber + " and " + secondNumber + " max value is " + output[i];
    console.log(message);
}