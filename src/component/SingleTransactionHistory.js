import React from 'react'

function SingleTransactionHistory(props) {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center my-2">
            <p className="mx-4 text-left">{props.TransactionName}</p>
            <p className={`${props.amount.slice(0,1)=== "-"?"text-red-600":"text-green-600"} text-right`}>{props.amount}</p>
        </div>
    )
}

export default SingleTransactionHistory
