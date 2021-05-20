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
    <div className='p-4 col-span-1 row-span-1 bg-white rounded-xl shadow-xl flex flex-col align-center'>
      <h2 className='text-2xl text-center font-bold mt-4'>Transactions</h2>
      <h4 className='my-4 text-lg font-semibold'>Select a Coin:</h4>
      <Select options={geckoCoins} onChange={handleChooseCoin} className='shadow-sm' />
      <h4 className='my-4 text-lg font-semibold'>Was this a buy or a sell?:</h4>
      <Select
        options={[
          { value: 'buy', label: 'Buy' },
          { value: 'sell', label: 'Sell' },
        ]}
        onChange={handleChooseTransType}
        className='shadow-sm'
      />
      <button ref={submitButton} onClick={handleSubmit} className='btn-blue'>
        <p className='text-white'>Submit</p>
      </button>
    </div>
  )
}

export default Transactions
