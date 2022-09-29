import React, { useEffect, useState } from 'react'

const Search = ({ attributes, filterValue, setFilterValue, setFilteredData }) => {

  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('')


  const handleSortBy = (e) => {
    const selected = e.target.value;
    setSelectedAttribute(selected);
    e.preventDefault();
    console.log(selected)
  }

  const handleSortByDepth = (e) => {
    const selected = e.target.value;
    setSelectedLevel(selected);
    e.preventDefault();
    console.log(selected)
  }

  const handleSearch = (e) => {
    const searched = e.target.value;
    console.log(searched)
    let filterData
    if (searched == '') {
      setFilteredData(attributes)
    } else {
      if (selectedAttribute === 'Название') {
        if (selectedLevel === 'Равно') filterData = attributes.filter((item) => item.name == searched);
        else if (selectedLevel === 'Содержит') filterData = attributes.filter((item) => item.name.toLowerCase().includes(searched.toLowerCase()));
      }
      else if (selectedAttribute === 'Количество') {
        if (selectedLevel === 'Равно') filterData = attributes.filter((item) => item.quantity == searched);
        else if (selectedLevel === 'Содержит') filterData = attributes.filter((item) => item.quantity.toString().includes(searched));
        else if (selectedLevel === 'Больше') filterData = attributes.filter((item) => item.quantity > searched);
        else if (selectedLevel === 'Меньше') filterData = attributes.filter((item) => item.quantity < searched);
      }
      else if (selectedAttribute === 'Расстояние') {
        if (selectedLevel === 'Равно') filterData = attributes.filter((item) => item.distance == searched);
        else if (selectedLevel === 'Содержит') filterData = attributes.filter((item) => item.distance.toString().includes(searched));
        else if (selectedLevel === 'Больше') filterData = attributes.filter((item) => item.distance > searched);
        else if (selectedLevel === 'Меньше') filterData = attributes.filter((item) => item.distance < searched);
      }
      setFilteredData(filterData)
    }
    setFilterValue(searched)
    console.log(filterData)

    e.preventDefault();
    e.stopPropagation();

  }

  useEffect(() => {

  }, [])


  return (
    <div className='wrapper'>
      <select onChange={(e) => handleSortBy(e)}>
        <option selected disabled>Сортировать</option>
        <option value={attributes.name}>Название</option>
        <option value={attributes.quantity}>Количество</option>
        <option value={attributes.distance}>Расстояние</option>
      </select>
      {selectedAttribute && selectedAttribute === 'Название' ?
        <select onChange={(e) => handleSortByDepth(e)}>
          <option selected disabled>Выберите уровень поиска</option>
          <option>Равно</option>
          <option>Содержит</option>
        </select> :
        <select onChange={(e) => handleSortByDepth(e)}>
          <option selected disabled>Выберите уровень поиска</option>
          <option>Равно</option>
          <option>Содержит</option>
          <option>Больше</option>
          <option>Меньше</option>
        </select>
      }
      <input
        type='text'
        placeholder='Поиск...'
        сlassName='search'
        value={filterValue}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  )
}

export default Search
