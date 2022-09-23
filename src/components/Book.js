import React from 'react';

const Book = (props) => { 
  const {title, author, category} = props;
    return(
      <>
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <div className='btns-container'>
          <button className="comment-btn">Comments</button>
          <button className="remove-btn">Remove</button>
          <button className="edit-btn">Edit</button>
        </div>
      </>
    )
}

export default Book;