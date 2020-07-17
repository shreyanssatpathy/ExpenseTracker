import React,{useState, useContext} from 'react'
import {Context} from "../Context"
const AddTransactionList = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()
    const {addItem} = useContext(Context)

   

    function onSubmit(e) {
        e.preventDefault();

        const newItem = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
    }
        addItem(newItem)
        setText("")
        setAmount("")
        
    }
   
    

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div class="form-control">
            <label for="text">Text</label>
            <input type="text" placeholder="eg: Groceries" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="amount"
              >Amount <br />
             </label
            >
            <input type="text"  placeholder="Enter amount..."  value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <small>(negative - expense, positive - income)</small>
          <button class="btn">Add transaction</button>
        </form>
      </>
      
    )
}

export default AddTransactionList
