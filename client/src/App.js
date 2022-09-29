import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Table from './components/Table'

function App() {

  const [attributes, setAttributes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [attributesPerPage, setAttributesPerPage] = useState(5);
  const [search, setSearch] = useState([])

  useEffect(() => {
    const getAttributes = async () => {
      setIsLoading(true)
      const getAtts = await fetch(`${process.env.REACT_APP_API_URL}`)
      const response = await getAtts.json()
      setAttributes(response)
      // setSearch(response)
      setIsLoading(false)
    }

    getAttributes()
  }, []);

  const handleSort = (col) => {
    // console.log(col)
    const copyArr = [...attributes]
    const sortedArr = copyArr.sort((a, b) => (a[col] > b[col] ? 1 : -1));
    setAttributes(sortedArr)
  }

  console.log('ATTRIBUTES:', Object.keys(attributes))

  const lastIndex = currPage * attributesPerPage;
  const firstIndex = lastIndex - attributesPerPage;
  const currAttributes = attributes.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setCurrPage(pageNumber)


  return (
    <div>
      <Search attributes={attributes} setSearch={setSearch} />
      <Table attributes={currAttributes} isLoading={isLoading} handleSort={handleSort} />
      <Pagination
        attributesPerPage={attributesPerPage}
        totalAttributes={attributes.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
