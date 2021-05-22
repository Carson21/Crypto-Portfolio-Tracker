import CoinSummary from './CoinSummary'

const Holdings = ({ coins }) => {
  return (
    <div className='h-full p-4 flex flex-col justify-evenly'>
      <h2 className='text-2xl text-center font-bold my-2'>Holdings</h2>
      <div className='overflow-auto h-3/4'>
        {coins &&
          coins.map((coin, index) => {
            return <CoinSummary key={index} coin={coin} />
          })}
      </div>
    </div>
  )
}

export default Holdings
