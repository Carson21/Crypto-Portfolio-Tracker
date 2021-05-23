const CoinSummary = ({ coin }) => {
  const capatilize = (str) => {
    let split = str.split('-')
    split = split.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return split.join(' ')
  }

  return (
    <div className='flex items-center text-center justify-between p-4 my-2 w-full h-16 shadow-sm border-gray-300 border rounded'>
      <h2 className='w-1/4 text-lg font-semibold text-blue-600'>{capatilize(coin.id)}</h2>
      <h2 className='w-1/4 text-lg font-semibold'>{coin.amount} coins</h2>
      <h2 className='w-1/4 text-lg font-semibold'>${coin.totalCost}</h2>
      <h2 className='w-1/4 text-lg font-semibold'>${coin.realizedGains}</h2>
    </div>
  )
}

export default CoinSummary
