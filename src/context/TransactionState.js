import { createContext,useState } from "react";

const TransactionContext = createContext();

const TransactionState = ({children})=>{
    const [transactionData, setTransactionData] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [incomeAmount, setIncomeAmount] = useState(0)
    const [expenseAmount, setExpenseAmount] = useState(0)
    const transactionEval = ()=>{
        let incomeAmountValue = 0;
        let expenseAmountValue = 0;
        transactionData.forEach((element)=>{
        setTotalAmount(totalAmount+Number.parseInt(element.amount))
        if(element.amount.slice(0,1) === "+")
        {
           incomeAmountValue += Number.parseInt(element.amount.slice(1))
        }
        else if(element.amount.slice(0,1) === "-")
        {
            expenseAmountValue += Number.parseInt(element.amount.slice(1))
        }
        setIncomeAmount(incomeAmountValue)
        setExpenseAmount(expenseAmountValue)
    })
    }
    return(
        <TransactionContext.Provider value={{transactionData,setTransactionData,totalAmount,incomeAmount,expenseAmount,transactionEval}}>
            {children }
        </TransactionContext.Provider>
    )
}
export { TransactionState,TransactionContext}