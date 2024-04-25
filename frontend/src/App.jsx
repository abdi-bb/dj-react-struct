import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // Initialize the products state with an empty array
  const [productsData, setProductsData] = useState([])

  const endpoint = `${import.meta.env.VITE_API_URL}/products/`

  // Fetch data from the API
  const fetchData = async () => {
    console.log('fetching data...')
    const response = await axios.get(endpoint)
    console.log(response)
    const data = response.data
    // Update the products state with the fetched data
    setProductsData(data)
    console.log(data)
    return data
  }

  // Post data to the API
  const postData = async () => {
    // Define the data to be posted using hardcoded values for now
    const data = {
      name: 'test x',
      description: 'test x description',
    }
    // Post the data to the API
    const response = await axios.post(endpoint, data)
    console.log(response)
    return response.data
  }

  // Post handler function
  const handleSendData = async () => {
    const newData = await postData()
    if (newData) {
      // Update the products state with the new data for the UI without fetching again
      setProductsData(prevState => [...prevState, newData])
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    Hello World

    <ul>
      {productsData.map(product => <li key={product.id}>{product.name}</li>)}
    </ul>

    <button onClick={handleSendData}>Send Data</button>
    </>
  )
}

export default App
