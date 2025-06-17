import { useState } from 'react'
import accumulatorBestTimeToBuySellStocks from './accumulatorBestTimeToBuySellStocks'
import dpBestTimeToBuySellStocks from './dpBestTimeToBuySellStocks'
import dqBestTimeToBuySellStocks from './dqBestTimeToBuySellStocks'
import peakvalleyBestTimeToBuySellStocks from './peakvalleyBestTimeToBuySellStocks'
import './App.css'

function App() {
  const [prices, setPrices] = useState('')
  const [results, setResults] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const priceArray = prices.split(',').map(p => parseInt(p.trim())).filter(p => !isNaN(p))
    
    if (priceArray.length === 0) {
      setResults({ error: 'Please enter valid numbers separated by commas' })
      return
    }

    setResults({
      accumulator: accumulatorBestTimeToBuySellStocks(priceArray),
      dp: dpBestTimeToBuySellStocks(priceArray),
      dq: dqBestTimeToBuySellStocks(priceArray),
      peakvalley: peakvalleyBestTimeToBuySellStocks(priceArray)
    })
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Stock Trading Algorithm Comparison</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="prices" className="block mb-2">Enter stock prices (comma-separated):</label>
          <input
            type="text"
            id="prices"
            value={prices}
            onChange={(e) => setPrices(e.target.value)}
            placeholder="e.g., 7,1,5,3,6,4"
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
      </form>

      {results?.error && (
        <div className="text-red-500 mb-4">{results.error}</div>
      )}

      {results && !results.error && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Results:</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-medium">Accumulator Approach</h3>
              <p className="text-lg">Max Profit: {results.accumulator}</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-medium">Dynamic Programming</h3>
              <p className="text-lg">Max Profit: {results.dp}</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-medium">Divide & Conquer</h3>
              <p className="text-lg">Max Profit: {results.dq}</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-medium">Peak Valley</h3>
              <p className="text-lg">Max Profit: {results.peakvalley}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
