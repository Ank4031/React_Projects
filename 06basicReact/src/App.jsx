import { useState } from 'react'
import Box from './components/CurrencyBox.jsx'
import useCurrencyInfo from './useCurrencyInfo.js'

function App() {
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [amount, setAmount] = useState(1);
  const [calAmount, setCalAmount] = useState(0)
  const data = useCurrencyInfo(from)
  const options = Object.keys(data);
  // console.log(options);

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-blue-400">
          <div className="bg-white/90 px-7 py-5 rounded-3xl shadow-lg">
              <div className="flex items-center flex-col rounded-3xl">
                <h1 className='text-2xl my-5 font-bold'>Currency Converter</h1>
                <Box title = "From" inpEnable={false} selectEnable={false} amount={amount} setAmount={setAmount} currType={from} optionLis={options} setCurr={setFrom}/>
                <button className='text-center px-5 py-1 bg-blue-900 text-white rounded-2xl my-2 hover:bg-white hover:text-black hover:border-1'
                onClick={()=>{
                  setFrom(to)
                  setTo(from)
                }}
                >
                  Swap
                </button>
                <Box title = "to" inpEnable={true} selectEnable={false} amount={calAmount} setAmount={setCalAmount} currType={to} optionLis={options} setCurr={setTo}/>
                <button className='px-3 py-1 rounded-2xl shadow-lg bg-blue-900 text-white my-2 hover:bg-white hover:text-black hover:border-1'
                 onClick={()=>{
                  setCalAmount(()=>
                    data[to]*amount
                  )
                 }}
                >
                  Convert Currency
                </button>
              </div>
          </div>

      </div>
    </>
  )
}

export default App
