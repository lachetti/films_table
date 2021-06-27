import FilmComments from "./FilmComments";
import './FilmRow.css';

const FilmRow = ({id, url, imgUrl, title, genres, rating, year}) => {
    return (
        <div key={id} className='film-row'>
            <div className='film-row__content'>
                <div className='film-row__poster'>
                    <img src={imgUrl} alt='Not found'></img>
                </div>
                <div className='film-row__info'>
                    <a href={url} className='film-row__title'>
                        {title}
                    </a>
                    <div className='film-row__description'>
                        <div className='film-row__text'><b>Genres:</b> {genres.join(', ')}</div>
                        <div className='film-row__text'><b>Rating:</b> {rating}</div>
                        <div className='film-row__text'><b>Year:</b> {year}</div>
                    </div>
                </div>
            </div>
            <FilmComments/>
        </div>
    );
}

export default FilmRow;

/* const FilmTR = ({id, url, imgUrl, title, genres, rating, year}) => {
    return (
        <tr key={id}>
            <td className='films-table__poster'>
                <img src={imgUrl} alt='Not found'></img>
            </td>
            <td className='films-table__info'>
                <a href={url} className='films-table__title'>
                    {title}
                </a>
                <div className='films-table__text'><b>Genres:</b> {genres.join(', ')}</div>
                <div className='films-table__text'><b>Rating:</b> {rating}</div>
                <div className='films-table__text'><b>Year:</b> {year}</div>
                <button className="films-table__comment-button">
                    <span>Comments</span> 
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default FilmTR; */