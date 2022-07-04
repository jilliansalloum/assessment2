///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(
    (price, totalPrice) => price + totalPrice
)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalPrice = 0
    finalPrice += cartTotal
    finalPrice += (cartTotal * tax)
    finalPrice -= couponValue
    return finalPrice
}
console.log(calcFinalPrice(20,5,0.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    the object named customers will recieve arguments first name, last name, birthday month,  and age
the first name, last name and birthday month will be strings, and the age will be a number
i chose those data types so you can organize by last name to find multiple people in the same family, and so that you can see people with upcoming birthdays, and ages to see how old they are turning. in case the restaurant wants to send an email coupon or invite. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customers {
    constructor(firstName, lastName, age, birthdayMonth){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.birthdayMonth = birthdayMonth
    }
}
