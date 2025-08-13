import { useState } from "react"

function Box({
    title,
    inpEnable,
    selectEnable,
    amount,
    setAmount,
    currType,
    optionLis,
    setCurr,
}){
    return(
        <div className="flex flex-col rounded-3xl border-1 border-white p-4 w-100 bg-blue-200">
            <div className="flex justify-between">
                <p>{title}</p>
                <p>Currency Type</p>
            </div>
            <div className="flex justify-between my-2">
                <input className="w-40 outline-none bg-white rounded-lg"
                type="number"
                min={1}
                max={1000}
                value = {amount}
                disabled = {inpEnable}
                onChange={(e)=>{
                    let value = Number(e.target.value);
                    if (value < 1) value = 1;
                    if (value > 1000) value = 1000;
                    setAmount(value);
                }}
                />
                <select className="bg-white outline-none rounded-lg" 
                disabled = {selectEnable} 
                value ={currType} 
                onChange={(e)=>{setCurr(e.target.value)}}
                >
                    {optionLis.map(element => (
                        <option value={element}>{element}</option>                    
                    ))}
                    <option value="usd">{currType}</option>
                </select>
            </div>
        </div>
    )
}

export default Box