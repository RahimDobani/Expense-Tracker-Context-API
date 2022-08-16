import React,{useContext,useEffect} from 'react'
import {TransactionContext} from '../context/TransactionState'
function TotalTransaction() {
    const {transactionData,totalAmount,incomeAmount,expenseAmount,transactionEval} = useContext(TransactionContext)
    useEffect(() => {
    transactionEval()
    // eslint-disable-next-line
    }, [transactionData])
    return (
    <>
        <div className="m-4">
            <h1 className="font-bold text-xl my-4">Your Balance</h1>
            <p className="font-bold">${totalAmount}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
            <div className="m-4">
                <h1 className="font-bold text-xl my-4">Income</h1>
                <p className="text-green-500 font-bold">+${incomeAmount}</p>
            </div>
            <div className="m-4">
                <h1 className="font-bold text-xl my-4">Expense</h1>
                <p className="text-red-700 font-bold">-${expenseAmount}</p>
            </div>
        </div>
    </> 

    )
}

export default TotalTransaction
