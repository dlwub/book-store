import React from 'react';

export default class BookForm extends React.Component {
  render(){
    return(
      <>
        <h3>ADD NEW BOOK</h3>
        <div className="input-btn-container">
          <input type="text" placeholder="Book title" />
          <input type="text" placeholder="Author" />
          <select id="category">
            <option value="" disabled selected hidden>Category</option>    
          </select>
          <button className='add-btn'>ADD BOOK</button>
        </div>

      </>
    )
  }
}