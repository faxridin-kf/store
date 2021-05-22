import React, { Component } from 'react';
const aksesuar = require('../../aksesuar.json')
class Aksesuar extends Component {
 state = { 
  aksesuars:aksesuar,
  key:'',
  search: true,
  }
//   handleSearch = () => {
//    if(this.state.key !== '' || this.state.key !== null){
//    this.setState({ search: true })
// }
// }
 render() { 
  return ( 
   <React.Fragment>
       <div className="flexmenu">
          <h1>Акксесуары</h1>
       <div className="searchblog">
       <input type="text" placeholder='Поиск' className='inputsearch' onChange={(event) => { this.setState({ key: event.target.value }) }}/>
       {/* <button className='poisk'  onClick={this.handleSearch}>Пойск</button> */}
       </div>
          </div>
    {
      this.state.aksesuars.map((aksesuar)=>{
         if(this.state.search===true) {
            if (aksesuar.name.toUpperCase().includes(this.state.key.toUpperCase())){
               return(
                  <div className="card">
                  <img src={aksesuar.image} className='cardImg' alt=""/>
                        <a href='' className='tvNameLink'>
                        <p className="tvName">{aksesuar.name}</p>
                        </a>
                        <p>Цвет: - {aksesuar.params[0].colors}</p>
                  </div>
               )
            }
         } else{
            return(
               <div className="card">
               <img src={aksesuar.image} className='cardImg' alt=""/>
                     <a href='' className='tvNameLink'>
                     <p className="tvName">{aksesuar.name}</p>
                     </a>
                     <p>Цвет: - {aksesuar.params[0].colors}</p>
               </div>
            )
         }
      })
    }
   </React.Fragment>
   );
 }
}
 
export default Aksesuar;