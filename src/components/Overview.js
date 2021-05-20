import Holdings from './Holdings'
import Chart from './Chart'

const Overview = ({ coins }) => {
  return (
    <div className='flex flex-col w-2/3 gap-y-4'>
      <div className='h-2/3 bg-white w-full rounded-xl shadow-xl'>
        <Chart coins={coins} />
      </div>
      <div className='h-1/3 bg-white w-full rounded-xl shadow-xl'>
        <Holdings coins={coins} />
      </div>
    </div>
  )
}

export default Overview
