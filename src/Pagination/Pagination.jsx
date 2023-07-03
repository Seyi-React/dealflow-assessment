import React from 'react';

const Pagination = ({ currentPage, freelancersPerPage, totalFreelancers, onPageChange }) => {
  const totalPages = Math.ceil(totalFreelancers / freelancersPerPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      {renderPageButtons()}
    </div>
  );
};

export default Pagination;
