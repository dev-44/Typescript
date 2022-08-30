interface Item {
    price: number,
    name: string,
    quantity: number
}

const printItem = (item: Item): void => {
    console.log(`${item.name} - $${item.price}`)
}