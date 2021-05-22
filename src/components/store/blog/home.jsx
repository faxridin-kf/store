import React, { Component } from 'react';
const phone = require('../../home.json')
class Home extends Component {
  state = { 
    homes:phone,
    key:'',
     search: true,
   }
  render() { 
    return ( 
      <React.Fragment>
        <div className="c">
        <div className="flexmenu">
          <h1>Бытовая техника</h1>
       <div className="searchblog">
       <input type="text" placeholder='Поиск' className='inputsearch'onChange={(event) => { this.setState({ key: event.target.value }) }}/>
       </div>
          </div>
          {this.state.homes.map((home)=>{
          if(this.state.search===true) {
            if (home.name.toUpperCase().includes(this.state.key.toUpperCase())){
              return(
                <div className="card homecrad">
                <img src={home.image} className='cardImg' alt=""/>
                <a href={home.name} className='tvNameLink'><p className="tvName">{home.name}</p></a>
                <p>Цвет: - {home.params[0].colors}</p>
                <p>Размер: - {home.params[0].size}</p>
                <p>Можность: - {home.params[0].power}</p>
                <p>Енергия: - {home.params[0].energy}</p>
              </div>
              )
            }
          } else{
            return(
              <div className="card homecrad">
              <img src={home.image} className='cardImg' alt=""/>
              <a href={home.name} className='tvNameLink'><p className="tvName">{home.name}</p></a>
              <p>Цвет: - {home.params[0].colors}</p>
              <p>Размер: - {home.params[0].size}</p>
              <p>Можность: - {home.params[0].power}</p>
              <p>Енергия: - {home.params[0].energy}</p>
            </div>
            )
          }
          })}
        </div>
      </React.Fragment>
     );
  }
}
 
export default Home;