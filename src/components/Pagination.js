import './Pagination.css';

const Pagination = ({ movieCount, page, goToPage }) => {
    return (
        <div className='pagination'>
            <div className='pagination__button prev' onClick={() => goToPage(page===1 ? 1 : page-1)}>
                Prev
            </div>
            <div>
                current page: {page}
            </div>
            <div className='pagination__button next' onClick={() => goToPage(page===Math.ceil(movieCount / 10) ? Math.ceil(movieCount / 10) : page+1)}>
                Next
            </div>
        </div>
    );
}

export default Pagination;