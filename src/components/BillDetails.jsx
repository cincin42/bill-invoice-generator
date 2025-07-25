import React, { useState } from 'react'

const BillDetails = ({ onAddItem, onDeleteItem }) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        if(!item.trim()) {
            setErrorMessage('Item name cannot be empty');
            return;
        }

        //Check if the item contains only alphabetical characters
        if(!/^[a-zA-Z\s]+$/.test(item)) {
            setErrorMessage('Item name can only contain letters and spaces');
            return;
        }

        const newItem = {
            item, quantity, price}
            onAddItem(newItem);
            setItem('');
            setQuantity(1); 
            setPrice(0);
            setErrorMessage('');
        }
  return (
    <div>
        <label>Item: </label>
        <input 
            type="text"
            value={item}
            onChange={ (e) =>
                setItem(e.target.value) }
        />

         <label>Quantity:  </label>
        <input 
            type="number"
            value={quantity}
            onChange={ (e) =>
                setQuantity(e.target.value) }
        />

         <label>Price: </label>
        <input 
            type="number"
            value={price}
            onChange={ (e) =>
                setPrice(e.target.value) }
        />
        <button onClick={handleAddItem}>Add Item</button>
        <p>{errorMessage}</p>
            
    </div>
  )
}

export default BillDetails