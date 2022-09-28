import React, { useEffect, useState } from 'react'

const Table = ({ attributes, isLoading }) => {

  // const [attributes, setAttributes] = useState([]);
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}`)
  //     .then(response => response.json())
  //     .then(data => setAttributes(data))
  // }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Distance</th>
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
