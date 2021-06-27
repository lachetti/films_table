import './FilmComments.css';

const Comment = ({comment, deleteComment}) => {
    return (
        <div className="film-comments__view" key={comment.id}>
            <div className='name-submit-wrapper'>
                <div className="film-comments__user">
                    {comment.user}
                </div>
                <div className="film-comments__delete" onClick={() => deleteComment(comment.id)}>
                    delete
                </div>
            </div>
            <div className="film-comments__comment">
                {comment.text}
            </div>
        </div>
    );
}

export default Comment;