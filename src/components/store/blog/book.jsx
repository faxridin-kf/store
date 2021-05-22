import React, { Component } from 'react';
const book = require('../../book.json')
class Books extends Component {
 state = { 
  books:book,
  key:'',
  search: true
  }
 render() { 
  return ( 
   <React.Fragment>
           <div className="flexmenu">
          <h1>Книги</h1>
       <div className="searchblog">
       <input type="text" placeholder='Поиск' className='inputsearch'onChange={(event) => { this.setState({ key: event.target.value }) }}/>
       </div>
          </div>
          {this.state.books.map((book)=>{
               if(this.state.search===true) {
                if (book.name.toUpperCase().includes(this.state.key.toUpperCase())){
                  return(
                    <div className="card mobilecard">
                    <img src={book.image} className='cardImg' alt=""/>
                    <a href={book.name} className='tvNameLink'>
                     <p className="tvName">Название: {book.name}</p>
                     </a>
                     <p className='tvName'>Цена: {book.price}</p>
                     <p className='tvName'>Отзыв: {book.feedback}</p>
                  </div>
                  )
                }
              }
              else{
               return(
                 <div className="card mobilecard">
                 <img src={book.image} className='cardImg' alt=""/>
                 <a href={book.name} className='tvNameLink'><p className="tvName">Название: {book.name}</p></a>
            <p className='tvName'>Цена: {book.price}</p>
            <p className='tvName'>Отзыв: {book.feedback}</p>
               </div>
               )
             }
          })} 
   </React.Fragment>
   );
 }
}
 
export default Books;