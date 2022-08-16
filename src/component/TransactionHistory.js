
import React,{useContext} from 'react'
import SingleTransactionHistory from './SingleTransactionHistory'
import {TransactionContext} from '../context/TransactionState'
function TransactionHistory() {
    const {transactionData} = useContext(TransactionContext)
    return (
        <div>
            <h1 className="font-bold text-3xl my-4">History</h1>
            {
                transactionData.length!==0?
                transactionData.map((element)=>
                <div key={element.name+Math.random()}>
                <SingleTransactionHistory amount={element.amount} TransactionName={element.name}/>
                </div>
                )
                : <div className='text-gray-300'>No transaction yet...</div>
            }
            
        </div>
    )
}

export default TransactionHistory
