import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table'

function App() {

  const [attributes, setAttributes] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getAttributes = async () => {
      setIsLoading(true)
      const getAtts = await fetch(`${process.env.REACT_APP_API_URL}`)
      const response = await getAtts.json()
      setAttributes(response)
      setIsLoading(false)
    }

    getAttributes()
  }, [])


  return (
    <div>
      <Table attributes={attributes} />
    </div>
  );
}

export default App;
