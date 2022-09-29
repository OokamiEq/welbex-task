import React, { useEffect, useState } from 'react'

const Table = ({ attributes, isLoading, handleSort, setSearch }) => {

  if (isLoading) {
    return <h2>Loading...</h2>
  }

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
          {attributes && attributes.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
