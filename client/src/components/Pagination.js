import React from 'react'

const Pagination = ({ totalAttributes, attributesPerPage, paginate }) => {

  const pageQty = [];

  for (let i = 1; i <= Math.ceil(totalAttributes / attributesPerPage); i++) {
    pageQty.push(i)
  }

  return (
    <div class="pagination">
      <ul className='pagination'>
        {pageQty.map((page) => (
          <li key={page} className='page' onClick={() => paginate(page)}>
            <span href='!#' className='page-link'>
              {page}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
