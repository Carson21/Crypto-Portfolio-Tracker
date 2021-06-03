import CoinSummary from './CoinSummary'

const Holdings = ({ coins }) => {
  return (
    <div className='overflow-auto w-full xl:w-1/2 p-4 flex-col align-center gap-6 bg-white rounded-xl shadow-xl'>
      <h2 className='text-2xl text-center font-bold my-6'>Holdings</h2>
      <div className='flex justify-evenly text-center gap-1 my-4'>
        <h2 className='text-xl w-1/5 font-sans font-semi-bold text-gray-700'>Coin Name:</h2>
        <h2 className='text-xl w-1/5 font-sans font-semi-bold text-gray-700'>Amount of Coins:</h2>
        <h2 className='text-xl w-1/5 font-sans font-semi-bold text-gray-700'>Average Cost:</h2>
        <h2 className='text-xl w-1/5 font-sans font-semi-bold text-gray-700'>Total Cost:</h2>
        <h2 className='text-xl w-1/5 font-sans font-semi-bold text-gray-700'>Realized Gains:</h2>
      </div>
      <div className='mb-2 px-2'>
        {coins &&
          coins.map((coin, index) => {
            return <CoinSummary key={index} coin={coin} />
          })}
        {coins.length === 0 && <h3 className='text-center text-xl text-red-600 py-12'>You do not have any coins!</h3>}
      </div>
    </div>
  )
}

export default Holdings
