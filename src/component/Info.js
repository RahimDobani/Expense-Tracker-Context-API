import React,{useContext} from 'react'
import {TestContext} from '../context/TestState'
import TestCompo from './TestCompo'
function Info() {
    const {stateValue,data} = useContext(TestContext)
    // console.log(a)
    console.log(stateValue)
    return (
        <div>
            {
                stateValue.map((element,index)=>
                    <div key={index}>
                   <TestCompo data={element} />
                   </div>
                )
            }
            <h1>i am info {data.name} and age is {data.age}</h1>
        </div>
    )
}

export default Info
