import CoinSummary from './CoinSummary'

const Holdings = ({ coins }) => {
  return (
    <div className='overflow-auto p-4'>
      <h2 className='text-2xl text-center font-bold mt-4'>Holdings</h2>
      {coins &&
        coins.map((coin, index) => {
          return <CoinSummary key={index} coin={coin} />
        })}
    </div>
  )
}

export default Holdings
