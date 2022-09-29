import React, { useState } from 'react'

const Search = ({ attributes, setSearch }) => {

  // const handleSearch = (e) => {
  //   if (!e.target.value) return setSearch(attributes)
  //   const searchResults = attributes.filter((item) => {
  //     return item.name.toString().includes(e.target.value) || item.quantity.toString().includes(e.target.value) || item.distance.toString().includes(e.target.value)
  //   });
  //   setSearch(searchResults)
  // };
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
    // if (selected event === 'Название') {
    //   if (selectedDepth === 'Равно') => e.target.value === attributes.value => filter
    // else через includes => filter
    // }
    //else if (selected event === 'Количество' или 'Расстояние' =>
    // 'Равно' по аналогии
    // 'Содержит' по аналогии
    // 'Больше' => filter e.target.value < item
    // 'Меньше' => filter e.target.value > item)
  }


  return (
    <div>
      <select onChange={(e) => handleSortBy(e)}>
        <option disabled>Сортировать</option>
        <option value={attributes.name}>Название</option>
        <option value={attributes.quantity}>Количество</option>
        <option value={attributes.distance}>Расстояние</option>
      </select>
      {selectedAttribute && selectedAttribute === 'Название' ?
        <select onChange={(e) => handleSortByDepth(e)}>
          <option disabled>Выберите уровень поиска</option>
          <option>Равно</option>
          <option>Содержит</option>
        </select> :
        <select onChange={(e) => handleSortByDepth(e)}>
          <option disabled>Выберите уровень поиска</option>
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
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* // onChange={(e) => handleSearch(e.target.value)} /> */}
    </div>
  )
}

export default Search
