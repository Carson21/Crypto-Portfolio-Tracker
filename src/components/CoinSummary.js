const CoinSummary = ({ coin }) => {
  return (
    <div>
      <p>
        {coin.id} {coin.amount} {coin.cost} {coin.totalCost} {coin.realizedGains}
      </p>
    </div>
  )
}

export default CoinSummary
