import { useState, useEffect } from 'react'
import Select from 'react-select'

const Transactions = ({ coins, addCoin, setCoin }) => {
  const [selectedCoin, setSelectedCoin] = useState()
  const [geckoCoins, setGeckoCoins] = useState()

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false'
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

  const handleChoose = (coin) => {
    setSelectedCoin(coin.value)
  }

  return (
    <div className='p-4 w-1/3 border border-gray-500 border-solid'>
      <h2 className='text-2xl text-center font-sans'>Transactions</h2>
      <Select options={geckoCoins} onChange={handleChoose} />
      <button
        onClick={() => {
          if (!(selectedCoin === undefined)) {
            console.log('hello')
          }
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default Transactions
