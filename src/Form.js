// import { useEffect, useState } from 'react';
import RegularPlayers from './RegularPlayers';
import AdditionalPlayers from './AdditionalPlayers';

function Form({pabloChecked, setPabloChecked, orrinChecked, setOrrinChecked, alexChecked, setAlexChecked, barneyChecked, setBarneyChecked, timChecked, setTimChecked, add1, setAdd1, add2, setAdd2, add3, setAdd3, add4, setAdd4, add5, setAdd5, add6, setAdd6, players, layoutImage, setLayoutImage}) {


  return (
    <div>
      
      
      <div className="formDiv">
          
      <form className='form'>
        <RegularPlayers pabloChecked={pabloChecked} setPabloChecked={setPabloChecked} orrinChecked={orrinChecked} setOrrinChecked={setOrrinChecked} alexChecked={alexChecked} setAlexChecked={setAlexChecked} barneyChecked={barneyChecked} setBarneyChecked={setBarneyChecked} timChecked={timChecked} setTimChecked={setTimChecked} />

      
        <AdditionalPlayers add1={add1} add2={add2}  add3={add3} add4={add4} add5={add5} add6={add6} setAdd1={setAdd1} setAdd2={setAdd2}  setAdd3={setAdd3} setAdd4={setAdd4} setAdd5={setAdd5} setAdd6={setAdd6}/>
          
        </form>
        </div>

      
    </div>
  );
}

export default Form;
