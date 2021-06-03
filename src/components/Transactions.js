import { useState, useEffect, useRef } from 'react'
import Select from 'react-select'

const Transactions = ({ changeCoin }) => {
  const [selectedCoin, setSelectedCoin] = useState()
  const [selectedTransType, setSelectedTransType] = useState()
  const [geckoCoins, setGeckoCoins] = useState()
  const [amountOfCoins, setAmountOfCoins] = useState('')
  const [costOfCoins, setCostOfCoins] = useState('')

  const submitButton = useRef()

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
    )
      .then((response) => response.json())
      .then((data) => {
        setGeckoCoins(
          data.map((coin) => {
            return { value: coin.id, label: coin.name }
          })
        )
      })
  }, [])

  const handleChooseCoin = (coin) => {
    setSelectedCoin(coin.label)
  }

  const handleChooseTransType = (trans) => {
    setSelectedTransType(trans.value)
  }

  const handleAmountOfCoins = (event) => {
    setAmountOfCoins(event.target.value)
  }

  const handleCostOfCoins = (event) => {
    setCostOfCoins(event.target.value)
  }

  const handleSubmit = () => {
    submitButton.current.blur()
    if (selectedCoin && selectedTransType && amountOfCoins && costOfCoins) {
      console.log(selectedCoin + ' ' + selectedTransType + ' ' + amountOfCoins + ' ' + costOfCoins)
      changeCoin(selectedCoin, selectedTransType, amountOfCoins, costOfCoins)
    }
  }

  return (
    <div className='h-1/2 xl:h-full p-4 w-full xl:w-1/2 bg-white rounded-xl shadow-xl flex flex-col align-center'>
      <h2 className='text-2xl text-center font-bold mt-4'>Transactions</h2>
      <h4 className='form-label'>Select a Coin:</h4>
      <Select options={geckoCoins} onChange={handleChooseCoin} className='shadow-sm' />
      <h4 className='form-label'>Was this a buy or a sell?:</h4>
      <Select
        options={[
          { value: 'buy', label: 'Buy' },
          { value: 'sell', label: 'Sell' },
        ]}
        onChange={handleChooseTransType}
        className='shadow-sm'
      />
      <h4 className='form-label'>How many coins did you transact?</h4>
      <input
        type='number'
        className='number-input'
        value={amountOfCoins}
        onChange={handleAmountOfCoins}
        placeholder='Amount'
      />
      <h4 className='form-label'>Cost of each coin?</h4>
      <input
        type='number'
        className='number-input'
        value={costOfCoins}
        onChange={handleCostOfCoins}
        placeholder='Cost $'
      />
      <button ref={submitButton} onClick={handleSubmit} className='btn-blue'>
        <p className='text-white'>Submit</p>
      </button>
    </div>
  )
}

export default Transactions
