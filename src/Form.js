// import { useEffect, useState } from 'react';
import RegularPlayers from './RegularPlayers';
import AdditionalPlayers from './AdditionalPlayers';

function Form({handlePlayerPlaying, players, layoutImage, setLayoutImage, addPlayer, setAddPlayer, handleNewPlayer}) {


  return (
    <div>
      
      
      <div className="formDiv">
          
      <form className='form'>
        <RegularPlayers players={players} handlePlayerPlaying={handlePlayerPlaying} />

      
        </form>
        <AdditionalPlayers addPlayer={addPlayer} setAddPlayer={setAddPlayer} handleNewPlayer={handleNewPlayer} />
          
        </div>

      
    </div>
  );
}

export default Form;
