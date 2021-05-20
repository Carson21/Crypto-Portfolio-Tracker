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

  const changeCoin = (coin) => {
    // console.log([...coins, coin])
    // setCoins([...coins, coin])
    // localStorage.setItem('coins', JSON.stringify(coins))
  }

  return (
    <div className='w-full h-full sm:h-screen bg-gray-100'>
      <div className='container mx-auto py-6 sm:py-12 h-full'>
        <div className='h-full px-4 sm:px-0 grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-3 gap-4'>
          <Overview coins={coins} />
          <Transactions coins={coins} changeCoin={changeCoin} />
        </div>
      </div>
    </div>
  )
}

export default App
