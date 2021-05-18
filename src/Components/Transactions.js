import { Listbox } from '@headlessui/react'
import { useState } from 'react'

const Transactions = ({ coins, addCoin, setCoin }) => {
  const [selectedCoin, setSelectedCoin] = useState()

  const capatilize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className='p-4 w-1/3 border border-gray-500 border-solid'>
      <h2 className='text-2xl text-center font-sans'>Transactions</h2>
      {coins.length > 0 && (
        <Listbox value={selectedCoin} onChange={setSelectedCoin}>
          <Listbox.Button className='block'>Select Coin</Listbox.Button>
          <Listbox.Options>
            {coins.map((coin, index) => {
              return (
                <Listbox.Option key={index} value={coin}>
                  {capatilize(coin.name)}
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </Listbox>
      )}
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
