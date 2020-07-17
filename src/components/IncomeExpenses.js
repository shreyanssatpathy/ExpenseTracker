import React, {useContext} from "react"
import {Context} from "../Context"

    function IncomeExpenses() {

        const {transactions} = useContext(Context)
        function Income() {
          const income = transactions.map(transaction => (transaction.amount>0 && transaction !=={}) ? transaction.amount :0)
          if(income === 0) {
            return 0
          }else {
            return income.reduce((acc, item) => (acc += item), 0)
          }
        }

        function Expense() {
          const expense = transactions.map(transaction => (transaction.amount<0 && transaction !=={}) ? transaction.amount :0)
          if(expense === 0) {
            return 0
          }else {
            return expense.reduce((acc, item) => (acc += item), 0)
          }
        }

    return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
    <p id="money-plus" className="money plus">${Income()}</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p id="money-minus" className="money minus">${Math.abs(Expense())}</p>
        </div>
      </div>
    )
}

export default IncomeExpenses