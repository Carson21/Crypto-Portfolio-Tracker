import { useState, useEffect, useRef } from 'react'
import Select from 'react-select'

const Transactions = ({ changeCoin }) => {
  const [selectedCoin, setSelectedCoin] = useState()
  const [selectedTransType, setSelectedTransType] = useState()
  const [geckoCoins, setGeckoCoins] = useState()

  const submitButton = useRef()

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
    )
      .then((response) => response.json())
      .then((data) => {
        setGeckoCoins(
          data.map((coin) => {
            return { value: coin.symbol, label: capatilize(coin.id) }
          })
        )
      })
  }, [])

  const capatilize = (str) => {
    let split = str.split('-')
    split = split.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return split.join(' ')
  }

  const handleChooseCoin = (coin) => {
    setSelectedCoin(coin.value)
  }

  const handleChooseTransType = (trans) => {
    setSelectedTransType(trans.value)
  }

  const handleSubmit = () => {
    submitButton.current.blur()
    if (!(selectedCoin === undefined) && !(selectedTransType === undefined)) {
      console.log(selectedCoin + ' ' + selectedTransType)
    }
  }

  return (
    <div className='p-4 w-1/3 bg-white rounded-xl shadow-xl flex flex-col align-center'>
      <h2 className='text-2xl text-center font-bold mt-4'>Transactions</h2>
      <h4 className='my-4 text-lg font-semibold'>Select a Coin:</h4>
      <Select options={geckoCoins} onChange={handleChooseCoin} className='shadow' />
      <h4 className='my-4 text-lg font-semibold'>Was this a buy or a sell?:</h4>
      <Select
        options={[
          { value: 'buy', label: 'Buy' },
          { value: 'sell', label: 'Sell' },
        ]}
        onChange={handleChooseTransType}
        className='shadow-sm'
      />
      <button
        ref={submitButton}
        onClick={handleSubmit}
        className='self-center font-semibold my-6 bg-blue-500 w-20 h-12 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-100 transition duration-150 ease-out'
      >
        <p className='text-white'>Submit</p>
      </button>
    </div>
  )
}

export default Transactions
