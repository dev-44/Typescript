import axios from 'axios'

interface User {
    id: number,
    name: string,
    email: string,
    adress: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {lat: number, lng: number}
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    },
}


axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
        console.log("It worked!")
        //console.log(res.data)
        const {data} = res
        printUser(data)
    })
    .catch(error => {
        console.log(error)
    })

    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log("It worked!")
        //console.log(res.data)
        res.data.forEach(printUser)
    })
    .catch(error => {
        console.log(error)
    })

function printUser(user: User) {
    console.log(user.name)
    console.log(user.email)
    console.log(user.phone)
    console.log('\n')
}