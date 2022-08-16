import React,{useState,useContext} from 'react'
import {TransactionContext} from '../context/TransactionState'
function Transaction() {
    const {transactionData,setTransactionData} = useContext(TransactionContext)
    const [nameValue, setNameValue] = useState("")
    const [amountValue, setAmountValue] = useState("")
    const handleClick = (e)=>{
        if(nameValue !== "" && amountValue !== "")
        {
            if(e.target.id === "add")
            {
                setTransactionData([...transactionData,{
                    id: nameValue+amountValue,
                    name: nameValue,
                    amount: "+"+amountValue
                }])
            }
            else{
                setTransactionData([...transactionData,{
                    id: nameValue+amountValue,
                    name: nameValue,
                    amount: "-"+amountValue
                }])
            }
           
            setNameValue("")
            setAmountValue("")
        }
        else
        {
            alert("input required")
        }
        
    }
    return (
        <>
        <div className="my-4">
        <div className="flex flex-col justify-center m-auto">
             <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center my-4 m-auto" id="username" type="text" placeholder="Enter Text" value={nameValue} onChange={(e)=>setNameValue(e.target.value)}></input>
             <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center my-4 m-auto" id="username" type="number" placeholder="Enter Amount" value={amountValue} onChange={(e)=>setAmountValue(e.target.value)}></input>
        </div>
        <div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-4" id={"add"} type="button" onClick={handleClick}>+</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-4" id={"sub"} type="button" onClick={handleClick}>-</button>
        </div>
        </div>
        </>

    )
}

export default Transaction
