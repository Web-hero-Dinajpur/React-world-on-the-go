import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const AllCountriesData = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
function App() {

  return (
    <>
      <Suspense fallback={<h2>Please Quickly coming this Data</h2>}>
        <Countries AllCountriesData={AllCountriesData}></Countries>
      </Suspense>
    </>
  )
}

export default App
