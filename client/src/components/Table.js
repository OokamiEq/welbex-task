import React, { useEffect, useState } from 'react'

const Table = ({ isLoading, handleSort, filteredData }) => {

  if (isLoading) {
    return <img src='https://gladians.com/images/loading.gif' alt='' />
  }

  // App.js => [filteredData, setFilteredData] = UseState([])
  // App.js props => filteredData => Table.js, Search.js
  // Search.js setFilteredData(filtered)
  // Search.js onChange => handleChange ? e.target.value 
  // Table.js => filteredData !== [] ? filteredData.map(...) : attributes.map(...)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th onClick={() => { handleSort(`name`) }}>Наименование</th>
            <th onClick={() => { handleSort(`quantity`) }}>Количество</th>
            <th onClick={() => { handleSort(`distance`) }}>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {filteredData && filteredData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.distance}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
