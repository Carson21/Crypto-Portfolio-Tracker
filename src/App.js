import Overview from './components/Overview'
import Transactions from './components/Transactions'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    let saved = JSON.parse(localStorage.getItem('coins'))
    if (saved == null) {
      localStorage.setItem('coins', JSON.stringify([]))
    } else {
      setCoins(saved)
    }
  }, [])

  return (
    <div className='container h-screen mx-auto p-12'>
      <div className='flex h-full flex-row justify-around gap-6 p-6 flex-nowrap border-red-500 border'>
        <Overview coins={coins} setCoins={setCoins} />
        <Transactions coins={coins} setCoins={setCoins} />
      </div>
    </div>
  )
}

export default App
