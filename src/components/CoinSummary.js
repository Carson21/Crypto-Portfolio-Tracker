const CoinSummary = ({ coin }) => {
  const capatilize = (str) => {
    let split = str.split('-')
    split = split.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return split.join(' ')
  }

  return (
    <div className='flex items-center h-16 text-center divide-solid divide-gray-400 divide-x-2 justify-between p-4 my-2 w-full shadow-sm border-gray-300 border rounded'>
      <h2 className='w-1/4 text-lg font-semibold text-blue-600'>{capatilize(coin.id)}</h2>
      <h2 className='w-1/4 text-lg font-semibold'>{coin.amount} coins</h2>
      <h2 className='w-1/4 text-lg font-semibold'>${coin.cost.toFixed(2)}</h2>
      <h2 className='w-1/4 text-lg font-semibold'>${coin.totalCost.toFixed(2)}</h2>
      <h2 className='w-1/4 text-lg font-semibold'>${coin.realizedGains.toFixed(2)}</h2>
    </div>
  )
}

export default CoinSummary
