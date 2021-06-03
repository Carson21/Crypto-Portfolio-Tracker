import Holdings from './components/Holdings'
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

  const changeCoin = (coin_id, trans, amount, cost) => {
    let editCoin = {}

    amount = parseFloat(amount)
    cost = parseFloat(cost)

    let index = coins.findIndex((coin) => {
      if (coin.name === coin_id) {
        return true
      } else {
        return false
      }
    })

    if (trans === 'buy') {
      if (index === -1) {
        editCoin.name = coin_id
        editCoin.cost = cost
        editCoin.amount = amount
        editCoin.totalCost = cost * amount
        editCoin.realizedGains = 0
      } else {
        editCoin = coins[index]
        editCoin.totalCost = editCoin.totalCost + cost * amount
        editCoin.amount = editCoin.amount + amount
        editCoin.cost = editCoin.totalCost / editCoin.amount
      }
    } else if (trans === 'sell') {
      if (index === -1) {
        alert('Tried selling with no coins in list, Try again!')
        return
      } else {
        editCoin = coins[index]
        if (editCoin.amount - amount >= 0) {
          editCoin.amount = editCoin.amount - amount
          editCoin.realizedGains = editCoin.realizedGains + (amount * cost - amount * editCoin.cost)
          if (editCoin.amount === 0) {
            editCoin.totalCost = 0
            editCoin.cost = 0
          }
        } else {
          alert('You tried selling more coins than you have recorded! Try again!')
          return
        }
      }
    }

    let newCoinList = coins

    if (index !== -1) {
      newCoinList[index] = editCoin
    } else {
      newCoinList.push(editCoin)
    }

    newCoinList = newCoinList.sort((a, b) => {
      return b.totalCost - a.totalCost
    })

    setCoins([...newCoinList])
    localStorage.setItem('coins', JSON.stringify(newCoinList))
  }

  return (
    <div className='w-full h-full xl:h-screen bg-gray-100'>
      <div className='container mx-auto py-6 sm:py-12 h-full'>
        <div className='h-full px-4 flex flex-col xl:flex-row gap-4 justify-evenly'>
          <Holdings coins={coins} />
          <Transactions changeCoin={changeCoin} />
        </div>
      </div>
    </div>
  )
}

export default App
