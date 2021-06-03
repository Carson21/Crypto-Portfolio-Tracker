const CoinSummary = ({ coin }) => {
  return (
    <div className='flex items-center h-16 text-center divide-solid divide-gray-400 divide-x-2 justify-between py-4 my-2 w-full shadow-sm border-gray-300 border rounded'>
      <h2 className='w-1/5 text-lg text-center px-2 font-semibold text-blue-600 overflow-x-hidden'>{coin.name}</h2>
      <h2 className='w-1/5 text-lg text-center px-2 font-semibold overflow-x-hidden'>{coin.amount} coins</h2>
      <h2 className='w-1/5 text-lg text-center px-2 font-semibold overflow-x-hidden'>${coin.cost.toFixed(2)}</h2>
      <h2 className='w-1/5 text-lg text-center px-2 font-semibold overflow-x-hidden'>${coin.totalCost.toFixed(2)}</h2>
      <h2 className='w-1/5 text-lg text-center px-2 font-semibold overflow-x-hidden'>
        ${coin.realizedGains.toFixed(2)}
      </h2>
    </div>
  )
}

export default CoinSummary
