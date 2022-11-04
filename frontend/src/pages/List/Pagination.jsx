import { PropTypes } from "prop-types";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button type="button" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
};

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
};

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
