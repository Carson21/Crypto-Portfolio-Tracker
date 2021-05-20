const Holdings = ({ coins }) => {
  return (
    <div className='p-4'>
      <h2 className='text-2xl text-center font-bold mt-4'>Holdings</h2>
      {coins &&
        coins.map((coin, index) => {
          return <p key={index}>{coin.name}</p>
        })}
    </div>
  )
}

export default Holdings
