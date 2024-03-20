let name = 'Alex'
let balance = 10000
let account = 7777

let nameP = prompt('Как вас зовут?')

if (nameP == name) {
    let accountP = prompt('Номер счета')

    if (accountP == account) {
        let money = prompt('Скольно обналичить?')

        if (money <= balance) {
            let res = 'Снято: ' + money + ", Осталось: " + (balance - money)
            console.log(res);
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('Пользователь не найден, досвидули')
    }

} else {
    alert('Пользователь не найден, досвидули')
}