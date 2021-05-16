import Overview from "./Components/Overview"
import Transactions from "./Components/Transactions"

function App() {
  return (
    <div className='container h-screen mx-auto p-12'>
      <div className='flex h-full flex-row justify-around gap-6 p-6 flex-nowrap border-red-500 border'>
        <Overview />
        <Transactions />
      </div>
    </div>
  )
}

export default App
