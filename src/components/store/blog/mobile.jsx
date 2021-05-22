import React, { Component } from 'react';
const mobile = require('../../mobile.json')
class Mobile extends Component {
 state = { 
  mobiles:mobile,
  key:'',
  search: true,
  }
 render() { 
  return ( 
   <React.Fragment>
       <div className="flexmenu">
          <h1>Мобильные</h1>
       <div className="searchblog">
       <input type="text" placeholder='Поиск' className='inputsearch' onChange={(event) => { this.setState({ key: event.target.value }) }}/>
       </div>
          </div>
<div className="flexcenter">
{this.state.mobiles.map((mobile)=>{
                if(this.state.search===true) {
                  if (mobile.name.toUpperCase().includes(this.state.key.toUpperCase())){
                     return(
                        <div className="card mobilecard">
                        <img src={mobile.image} className='cardImg' alt=""/>
                                <a href={mobile.name} className='tvNameLink'><p className="tvName">{mobile.name}</p></a>
                                <p>Цвет: {mobile.params[0].colors}</p>
                      </div>
                     )
                  }
               } else{
                  return(
                     <div className="card mobilecard">
                     <img src={mobile.image} className='cardImg' alt=""/>
                             <a href={mobile.name} className='tvNameLink'><p className="tvName">{mobile.name}</p></a>
                             <p>Цвет: {mobile.params[0].colors}</p>
                   </div>
                  )
               }
    })}
</div>
   </React.Fragment>
   );
 }
}
 
export default Mobile;