import React, { Component } from "react";
import axios from "axios";
import Menu from "../blog/menu";
const hh = require('../HH.json')
const home = require('../../home.json')
class StoreBlog extends Component {
  state = {
    store: hh,
    key:'',
  search: true,
  };
  render() {
    return (
      <React.Fragment>
        <div className="flexmenu">
          <h1>Тв и Аудио</h1>
       <div className="searchblog">
       <input type="text" placeholder='Поиск' className='inputsearch' onChange={(event) => { this.setState({ key: event.target.value }) }}/>
       </div>
          </div>
        {this.state.store.map((stor)=>{
                 if(this.state.search===true) {
                  if (stor.name.toUpperCase().includes(this.state.key.toUpperCase())){
                     return(
                      <div className="card">
                      <img src={stor.image} className='cardImg' alt=""/>
                    <a href='' className='tvNameLink'>
                      <p className="tvName">{stor.name}</p>
                      </a>
                      <p>Размер: - {stor.params[0].size}</p>
                      <p>Цвет: - {stor.params[0].colors}</p>
                      <p>Стоимость: 199$</p>
                    </div>
                     )
                  }
               } else{
                  return(
                    <div className="card">
                    <img src={stor.image} className='cardImg' alt=""/>
                  <a href='' className='tvNameLink'>
                    <p className="tvName">{stor.name}</p>
                    </a>
                    <p>Размер: - {stor.params[0].size}</p>
                    <p>Цвет: - {stor.params[0].colors}</p>
                    <p>Стоимость: 199$</p>
                  </div>
                  )
               }
        })}
      </React.Fragment>
    );
  }
}

export default StoreBlog;
