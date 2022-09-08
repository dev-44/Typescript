import React from 'react'


interface GreeterProps {
    name: string
}
function Greeter({name}: GreeterProps): JSX.Element {
    return <h1>Hello, {name}</h1>
}

export default Greeter