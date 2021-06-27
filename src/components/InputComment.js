import { useState } from "react";
import './FilmComments.css';

const InputComment = ({ newComment }) => {
    const [userComment, setUserComment] = useState('');
    const [userName, setUserName] = useState('');

    const applyComment = (e) => {
        e.preventDefault();
        newComment({ userName, userComment});
        setUserComment('');
        setUserName('');
    }

    const changeInputComment = (e) => {
        setUserComment(e.currentTarget.value);
    }

    const changeInputName = (e) => {
        setUserName(e.currentTarget.value);
    }

    return (
        <form className='film-comments__form' onSubmit={applyComment}>
            <div className='name-submit-wrapper'>
                <input 
                    required
                    className='film-comments__input_user'
                    value={userName}
                    type="text"
                    onChange={changeInputName}
                    placeholder="Your name..."
                />
                <button className='film-comments__button'>
                    Send
                </button>
            </div>
            <textarea  
                required
                className='film-comments__input_comment'
                value={userComment}
                type="text"
                onChange={changeInputComment}
                placeholder="Leave a comment..."
            />
        </form>
    );
}

export default InputComment;