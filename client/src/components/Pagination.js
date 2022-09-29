import React from 'react'

const Pagination = ({ totalAttributes, attributesPerPage, paginate }) => {

  const pageQty = [];

  for (let i = 1; i <= Math.ceil(totalAttributes / attributesPerPage); i++) {
    pageQty.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageQty.map((page) => (
          <li key={page} className='page'>
            <a onClick={() => paginate(page)} href='!#' className='page-link'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
