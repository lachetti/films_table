import './FilmsTable.css'
import FilmRow from './FilmRow';

const FilmsTable = (props) => {
    const { movies } = props;
    
    return (
        <div className='films-table'>
        {
            movies.map((movie) =>
                <FilmRow 
                    key={movie.id} 
                    id={movie.id} 
                    url={movie.url} 
                    imgUrl={movie.medium_cover_image} 
                    title={movie.title} 
                    genres={movie.genres} 
                    rating={movie.rating} 
                    year={movie.year}
                />
            )
        }
      </div>
    );
}

export default FilmsTable;

