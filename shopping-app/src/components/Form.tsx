import React, {useRef} from 'react'

interface FormProps {
    addItem: (item: string, qty: number) => void
}

function Form({addItem}: FormProps): JSX.Element {

    const inputRef = useRef<HTMLInputElement>(null)
    const qtyRef = useRef<HTMLInputElement>(null)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        //console.log(inputRef.current!.value);
        const newProduct = inputRef.current!.value
        const qty = parseInt(qtyRef.current!.value)

        addItem(newProduct, qty)

        inputRef.current!.value = ""
        qtyRef.current!.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Product Name' ref={inputRef} />
            <input type="number" placeholder='Product Qty' min={1} ref={qtyRef} />
            <button type='submit'>Add Item</button>
        </form>
    )
}

export default Form