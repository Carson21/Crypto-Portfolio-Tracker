import Holdings from './Holdings'
import Chart from './Chart'

const Overview = ({ coins }) => {
  return (
    <div className='flex flex-col col-span-1 row-span-2 sm:row-span-1 sm:col-span-2'>
      <div className='h-2/3 bg-white w-full rounded-xl shadow-xl mb-2'>
        <Chart coins={coins} />
      </div>
      <div className='h-1/3 bg-white w-full rounded-xl shadow-xl mt-2'>
        <Holdings coins={coins} />
      </div>
    </div>
  )
}

export default Overview
