import React, { useState } from "react";
import { useEffect } from "react";
import "./pagination.css";

export function Pagination({ RenderComponent, data, dataLimit = 6 }) {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (Math.ceil(data.length / dataLimit) < currentPage) {
      setPages(1);
      setCurrentPage(1);
    }
  }, [data, dataLimit, currentPage]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let pageLimit = Math.ceil(data.length / dataLimit);
    return new Array(pageLimit).fill().map((_, idx) => idx + 1);
  };

  return (
    <div className='pagination-container'>
      <div className='products-container'>
        {getPaginatedData().map((product) => (
          <RenderComponent key={product._id} product={product} />
        ))}
      </div>
      <div className='pagination'>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
