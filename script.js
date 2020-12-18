'use strict';
// let Tc = +prompt('Введите температуру в цельсиях');
// let Tf = (9/5)*Tc + 32;
// alert('Температура в фарингетах ' + Tf);
// let name = 'Василий';
// let admin = name;
// alert(admin);
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 Сначала происходит инкрименация переменной а только потом присваивание.
// d = b++; alert(d);           // 1 Здесь присваивание идет первым и только потм идет инкреминация переменной d.
// c = (2+ ++a); alert(c);      // 5 на этот момент а равнялось 2 так как выше была инкреминация переменной. и до сложения произошла инкреминация переменной а.
// d = (2+ b++); alert(d);      // 4 тоже самое только b инкреминируется уже после сложения.
// alert(a);                    // 3 текущие на данный момент значения а и b.
// alert(b);                    // 3


// var a = 2;
// var x = 1 + (a *= 2);
// alert (x);                   // x будет равен 5


// let a = 9;
// let b = -12;
// function func(a, b) {
//     if (a >= 0 && b >= 0) return a - b;
//     if (a < 0 && b < 0) return a * b;
//     if (a < 0 && b >= 0 || a >= 0 && b < 0) return a + b;
// }
// console.log(func(a, b));

// let x = 8;
// switch (x) {
//     case 1: console.log('1 ')
//     case 2: console.log('2 ')
//     case 3: console.log('3 ')
//     case 4: console.log('4 ')
//     case 5: console.log('5 ')
//     case 6: console.log('6 ')
//     case 7: console.log('7 ')
//     case 8: console.log('8 ')
//     case 9: console.log('9 ')
//     case 10: console.log('10 ')
//     case 11: console.log('11 ')
//     case 12: console.log('12 ')
//     case 13: console.log('13 ')
//     case 14: console.log('14 ')
//     case 15: console.log('15 ')
// }

// function summ(a, b) {
//     return a + b;
// }
// function subtraction(a, b) {
//     return a - b;
// }
// function multiplication (a, b) {
//     return a * b;
// }
// function division (a, b) {
//     return a / b;
// }

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'summ': return summ(arg1, arg2)
//         case 'subtraction': return subtraction(arg1, arg2)
//         case 'multiplication': return multiplication(arg1, arg2)
//         case 'division': return division(arg1, arg2)
//     }
// }

// let a = 0;
// while (a<=100) {
//     console.log(a);
//     a++;
// }
// const basket = [
//     ['Холодильник', 32000, 1],
//     ['Духовой шкаф', 29000, 1],
//     ['Варочная панель', 19000, 1]
// ]
// function countBasketPrice(array){
//     let totalPrice = 0;
//     for (const key in array){
//         let priceByCount = 0;
//         priceByCount = array[key][1] * array[key][2];
//         totalPrice = totalPrice + priceByCount;
//     }
//     return totalPrice;
// }
// console.log(countBasketPrice(basket));

// for (let i = 0; i <= 9; console.log(i++)){}

// for (let i=0;i<=20;i++){
//     let piramida = '';
//     for(let j=0;j<=i;j++){
//         piramida = piramida + '*';
//     }
//     console.log(piramida);
// }
const productStore = [];
const buyerBasket = [];

function addProductToBasket(productName, productCount) {
    for (const value of productStore) {
        if (value.productName === productName) {
            if (value.productCount < productCount) return console.log(`недостаточно товара ${value.productName} на складе`);
            buyerBasket.push(Object.assign ({}, value));
            value.productCount = value.productCount - productCount;
            buyerBasket[buyerBasket.length - 1].productCount = productCount;
        }
    }
}
function basketPrice(array) {
    let totalBasketPrice = 0;
    for (const value of array) {
        totalBasketPrice = totalBasketPrice + (value.productCount * value.productPrice);
    }
    return `стоимость товаров в корзине ${totalBasketPrice} рублей`;
}
function addProductToStore(productName, productCount, productPrice) {
    productStore.push(new Product(productName, productCount, productPrice));
}
function Product(productName, productCount, productPrice){
    this.productName = productName;
    this.productCount = productCount;
    this.productPrice = productPrice;
}

addProductToStore('Холодильник', 10, 32000);
addProductToStore('Стиральная машина', 10, 18000);
addProductToStore('Телевизор', 10, 11500);

console.log(productStore);

addProductToBasket('Телевизор', 3);
addProductToBasket('Стиральная машина', 2);

console.log(productStore);
console.log(buyerBasket);
console.log(basketPrice(buyerBasket));

function numberToString (number) {
    if (number > 999) {
        console.log('число превышает 999');
        return {};
    }
    const str = `${number}`;
    const stringNumber = {
        hundreds: 0,
        decades: 0,
        units: 0
    };
        if (number<10){
            stringNumber.hundreds = '0';
            stringNumber.decades = '0';
            stringNumber.units = str[0];
            return stringNumber;
        }
        if (number>10 && number<100){
            stringNumber.hundreds = '0';
            stringNumber.decades = str[0];
            stringNumber.units = str[1];
            return stringNumber;
        }
        if (number>100){
            stringNumber.hundreds = str[0];
            stringNumber.decades = str[1];
            stringNumber.units = str[2];
            return stringNumber;
        }
}
const obj = numberToString(998)
console.log(obj);