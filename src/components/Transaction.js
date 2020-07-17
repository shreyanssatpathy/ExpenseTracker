import React, {useContext} from 'react'
import {Context} from "../Context"
function Transaction({transaction}) {
    const {deleteItem} = useContext(Context)
    const sign = transaction.amount > 0 ? null : '-'
    
    return (
        <div>
            <li className={transaction.amount > 0 ? "plus" : "minus"}> 
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button class="delete-btn" onClick={() => deleteItem(transaction.id)}>x</button>
            </li>
      
        </div>
    )
}

export default Transaction
