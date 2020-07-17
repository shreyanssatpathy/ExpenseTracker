import React, {useContext} from "react"
import {Context} from "../Context"
function Balance() {
   
    const {transactions} = useContext(Context)
    const total = transactions.map(transaction =>((transaction !=={}) ?  transaction.amount : 0))
    const money= total.reduce((acc, item) => (acc += item), 0)
    
    return(
        <div className="container">
        <h4>Your Balance</h4>
    <h1 id="balance">${money}</h1>
        </div>
    )
}

export default Balance