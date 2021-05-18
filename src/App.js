import Overview from './components/Overview'
import Transactions from './components/Transactions'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [coins, setCoins] = useState()

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem('coins'))
    if (saved == null) {
      localStorage.setItem('coins', JSON.stringify([]))
      setCoins([])
    } else {
      setCoins(saved)
    }
  }, [])

  const addCoin = (coin) => {
    console.log([...coins, coin])
    setCoins([...coins, coin])
    localStorage.setItem('coins', JSON.stringify(coins))
  }

  const setCoin = (coin) => {}

  return (
    <div className='w-9/10 h-screen mx-auto p-12'>
      <div className='flex h-full flex-row justify-around gap-6 p-6 flex-nowrap border-red-500 border'>
        <Overview coins={coins} />
        <Transactions coins={coins} addCoin={addCoin} setCoin={setCoin} />
      </div>
    </div>
  )
}

export default App
