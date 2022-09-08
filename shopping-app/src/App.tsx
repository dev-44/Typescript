import React, {useState} from 'react';
import './App.css';
import Greeter from './components/Greeting';
import ShoppingList from './components/ShoppingList';
import Form from './components/Form';
import Item from './models/item'
import {v4 as setId} from 'uuid'

function App() {

  const [items, setItems] = useState<Item[]>([])

  const addItem = (product: string, qty: number) => {
    setItems([...items, {id: setId(), product, qty}])
  }

/*   const items = [
    {id: 1, product: "Lemon", qty: 3},
    {id: 2, product: "Chicken Breast", qty: 5}, 
  ] */

  return (
    <>
      <Greeter name="Oscar" />
      <div className='App'>{
        <>
          <ShoppingList items={items} />
          <Form addItem={addItem}/>
        </>}
      </div>
      
    </>
  );
}

export default App;
