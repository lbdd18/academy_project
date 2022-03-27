//1- Arrow functions

//1.1- Normal function
function getUserDetails(user){
    return 'User:' + user
}
console.log(getUserDetails('John Snow'))

//1.2- Arrow function
const getUserDetails = (user) => {
    return 'User:' + user
}
console.log(getUserDetails('John Snow'))

//1.3- Arrow function(Minimal)
const getUserDetails = (user) => 'User:' + user
console.log(getUserDetails('John Snow'))

//2- Template  Literals
const getUserDetails = (user) => {
    return `User: ${user}`
}
console.log(getUserDetails('John Snow'))

//3- Short Conditionals

//3.1- Ternary Operator
const getUserDetails = (user) => {
    return user !== 'John Snow' ? `User: ${user}` : 'Invalid User'
}
console.log(getUserDetails('John Snow'))

//3.2- &&
const getUserDetails = (user) => {
    return user !== 'John Snow' && `User: ${user}` 
}
console.log(getUserDetails('John Snow'))

//3.3 ||
const getUserDetails = (user) => {
    return user === 'John Snow' || `User: ${user}` 
}
console.log(getUserDetails('John Snow'))

//4- Array methods

//4.1 - .foreach()
users = [
    {
        name: 'John Snow',
        age: 25,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Arya Stark',
        age: 14,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Robb Stark',
        age: 20,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    }
]

const getUserDetails = (users) => 
    users.forEach((user)=> console.log(`User:${user.name}`))

getUserDetails(users)

//4.2 - .map()
users = [
    {
        name: 'John Snow',
        age: 25,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Arya Stark',
        age: 14,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Robb Stark',
        age: 20,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    }
]

const getUserDetails = (users) => 
    users.map((user) => `User:${user.name}`)

console.log(getUserDetails(users))

//4.3 - .filter()
users = [
    {
        name: 'John Snow',
        age: 25,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Arya Stark',
        age: 14,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Robb Stark',
        age: 20,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    }
]

const getUserDetails = (users) => 
    users.filter((user) => user.age >= 18)

console.log(getUserDetails(users))

//4.4 - .reduce()

users = [
    {
        name: 'John Snow',
        age: 25,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Arya Stark',
        age: 14,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Robb Stark',
        age: 20,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    }
]

const getUserDetails = (users) => 
    users.reduce((acc, user) => {
        if(user.age >= 18)
            return acc += user.age;
        else
            return acc;
    }, 0)

console.log(getUserDetails(users))

//5- Object Tricks

//5.1 - Property Shortland
const age = 25
const user = {
    name: 'John Snow',
    age
}

console.log(user)

//5.2 - Destructuring

//5.2.1 - Destructuring Properties
const user = {
    name: 'John Snow',
    age: 25
}

const {name, age} = user;

console.log(name);
console.log(age);

//5.2.2 - Destructuring Array
users = [
    {
        name: 'John Snow',
        age: 25,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Arya Stark',
        age: 14,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Robb Stark',
        age: 20,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    }
]

const [firstuser,] = users;

console.log(firstuser);

//5.3 - Spread Operator

//5.2.1 - Spread Operator Properties
const user = {
    name: 'John Snow',
    age: 25
}

const newuser = {
    ...user,
    address: {
        kindgom: 'North',
        capital: 'Winterfell'
    }
}

console.log(newuser);

//5.2.2 - Spread Operator Array
users = [
    {
        name: 'John Snow',
        age: 25,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Arya Stark',
        age: 14,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    },
    {
        name: 'Robb Stark',
        age: 20,
        address: {
            kindgom: 'North',
            capital: 'Winterfell'
        }
    }
]

newusers = [...users, {name: 'Sansa Stark'}]

console.log(newusers)