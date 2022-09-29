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
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const getAttributes = async () => {
      setIsLoading(true)
      const getAtts = await fetch(`${process.env.REACT_APP_API_URL}`)
      const response = await getAtts.json()
      setAttributes(response)
      setFilteredData(response)
      setIsLoading(false)
    }

    getAttributes()
  }, []);

  const handleSort = (col) => {
    // console.log(col)
    const copyArr = [...filteredData]
    const sortedArr = copyArr.sort((a, b) => (a[col] > b[col] ? 1 : -1));
    setFilteredData(sortedArr)
  }

  console.log('ATTRIBUTES:', Object.keys(attributes))

  const lastIndex = currPage * attributesPerPage; // 1 * 5 = 5
  const firstIndex = lastIndex - attributesPerPage; // 5 - 5 = 0
  const currAttributes = filteredData.slice(firstIndex, lastIndex); // 0, 5

  const paginate = pageNumber => setCurrPage(pageNumber)


  return (
    <div>
      <Search attributes={attributes} setFilteredData={setFilteredData} setFilterValue={setFilterValue} filterValue={filterValue} />
      <Table isLoading={isLoading} handleSort={handleSort} filteredData={currAttributes} />
      <Pagination
        attributesPerPage={attributesPerPage}
        totalAttributes={filteredData.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
