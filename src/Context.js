import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {

    const [transactions, setTransactions] = useState([ ])
    
        function deleteItem(id) {
           const updatedItems = transactions.filter(transaction => (transaction.id !== id))
            setTransactions(updatedItems)
        }

        function addItem(item) {
            setTransactions(prevItems => [...prevItems, item])
           
        }

    return(
        <Context.Provider value ={{transactions, deleteItem, addItem}}>
            {children}
        </Context.Provider> 
    )
}

export {Context, ContextProvider} 