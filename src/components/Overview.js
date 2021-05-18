import Holdings from './Holdings'
import Chart from './Chart'

const Overview = ({ coins }) => {
  return (
    <div className='flex flex-col w-2/3 gap-y-4 border border-gray-500 border-solid'>
      <div className='h-2/3 border border-green-500 border-solid'>
        <Chart coins={coins} />
      </div>
      <div className='h-1/3 border border-red-500 border-solid'>
        <Holdings coins={coins} />
      </div>
    </div>
  )
}

export default Overview
