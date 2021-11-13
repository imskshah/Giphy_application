import React from "react";

const Pagination = props => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-center border-0">
        {pageNumbers.map(number => {
          let classes = "page-item ";
          if (number === props.currentPage) {
            classes += "active";
          }

          return (
            <div className="paginater">
            <li className={classes} >
              <a
                onClick={() => props.pageSelected(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
