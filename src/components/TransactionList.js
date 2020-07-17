import React, { useContext } from 'react'
import {Context} from "../Context"
import Transaction from "./Transaction"
const TransactionList = () => {
     const {transactions} = useContext(Context)
    
    return (
        <div>
             <h3>History</h3>
             <ul id="list" class="list">
                {transactions.map(transaction =>{
                    if(transaction==={}){
                        return null
                    } else{
                        return (<Transaction key={transaction.id} transaction={transaction} />)}
                    }
                )}
             </ul>
        </div>
    )
}

export default TransactionList
