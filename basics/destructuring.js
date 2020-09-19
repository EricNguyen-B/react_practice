// Destructuring within Arrays

function sumAndMultiply(a, b) {
    return [a+b, a*b, a/b]
}

const [sum, multiply, division = 'No divison'] = sumAndMultiply(2,3)

console.log(sum)
console.log(multiply)
console.log(division)

// Destructuring within Objects

const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favoriteFood: 'Watermelon',
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

// const { name: firstName = 'john', age, favoriteFood = 'Rice' } = personTwo

// console.log(firstName)
// console.log(age)
// console.log(favoriteFood)

const { name: firstName, address: { city } } = personOne

console.log(firstName)
console.log(city)

// const personThree = {...personOne, ...personTwo}

// console.log(personThree)
