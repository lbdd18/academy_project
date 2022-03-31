type User = {
    name: string;
    age: number, 
    address: {
        city: string,
        postcode?: string
    }
}

function getUserDetails(user: User){
    return `User: Name:${user.name}, Age: ${user.age}, City: ${user.address.city}, PostCode: ${user.address.postcode}`
}

getUserDetails({name:'John Snow', age: 21, address: {city: 'Winterfell'}})