import CoinSummary from './CoinSummary'

const Holdings = ({ coins }) => {
  return (
    <div className='h-full p-4 flex flex-col justify-evenly gap-6'>
      <h2 className='text-2xl text-center font-bold mt-2'>Holdings</h2>
      <div className='flex justify-evenly'>
        <h2 className='text-xl font-sans font-semi-bold text-gray-700'>Coin Name:</h2>
        <h2 className='text-xl font-sans font-semi-bold text-gray-700'>Amount of Coins:</h2>
        <h2 className='text-xl font-sans font-semi-bold text-gray-700'>Total Cost:</h2>
        <h2 className='text-xl font-sans font-semi-bold text-gray-700'>Realized Gains:</h2>
      </div>
      <div className='overflow-auto mb-2 px-2'>
        {coins &&
          coins.map((coin, index) => {
            return <CoinSummary key={index} coin={coin} />
          })}
      </div>
    </div>
  )
}

export default Holdings
