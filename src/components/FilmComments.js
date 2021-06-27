import { useState } from "react";
import InputComment from "./InputComment.js";
import Comment from "./Comment.js";
import './FilmComments.css';

const FilmComments = () => {
    const [comments, setComment] = useState([]);

    const newComment = ({ userName, userComment }) => {
        if ((userName) && (userComment)) {
            const newComment = {
                id: Math.random().toString(36).substr(2, 8),
                user: userName,
                text: userComment
            }
            setComment([...comments, newComment]);
        }
    }

    const deleteComment = (id) => {
        setComment([...comments.filter((comment) => !(comment.id === id))]);
    }

    return (
        <div className='film-comments'>
            <InputComment newComment={newComment} />
            {comments.map((comment) => {
                return (
                    <Comment 
                        comment={comment}
                        deleteComment={deleteComment}
                    />
                );
            })}
        </div>
    );
}

export default FilmComments;