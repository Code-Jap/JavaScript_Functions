/*


const checkAge = (number) => {

        
        if (number >= 18) {
            return  true;
        }
        else {
            return  false;
        }       
};

const adultCheck = (number) => {

        const ageResult = checkAge(number);
        if (ageResult === true) {
            return "Hello there";
            }
            else {
                return "Hey Kiddo";
            }      
};

console.log(adultCheck(17));


*/

/*
const highTax = 0.21;
const lowTax = 0.09
const noTax = 0;


const totalPrice = (baseprice, tax) => {

    const totalPrice = vatCalculation(baseprice, tax);
    return totalPrice;    
};




const vatCalculation = (baseprice, tax) => {

    const vatPrice = baseprice * tax;
    return vatPrice;
};

console.log(vatCalculation(10, lowTax));
console.log(vatCalculation(100, highTax));
console.log(vatCalculation(50, noTax))
*/





const price = (number1, number2) => {

    const basePrice = number1 / number2;
    const vatPrice = number1 * number2;
    const price = [basePrice, vatPrice];
    return price;
}

console.log(price(1210, 1.21));




