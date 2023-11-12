import { useState } from 'react';

function Table({ layout, players, layoutImage, generated }) {
  console.log("In Table", players)

  return (
    <div>
      <section className="maincols">
      <section className="container">
        
        <section className="left-side">
          <section className="boxes">
            <div className="container">
              <div className="box three">
                <h2 id = "three"><i className="fa-solid fa-ghost"></i>{players[2] ? players[2] : 'Player 3'}</h2>
              </div>
            </div>
          </section>
        </section>

        <section className="right-side">
          <section className="boxes">
              <div className="container">
                {(generated && players.length < 5) ? null : (
                  <div className="box five">
                <h2 id="five"><i className="fa-solid fa-ghost"></i>{players[4] ? players[4] : 'Player 5'}</h2>
              </div>
                )}
              <div className="box one">
                <h2 id ="one"><i className="fa-solid fa-ghost"></i>{players[0] ? players[0] : 'Player 1'}</h2>
              </div>
            </div>
          </section>
            <section className="table">
              {layoutImage && <img className='image' src={layoutImage} alt='table layout'/>}
          </section>
            <section className="boxes">
              <div className="container">
                <div className="box two">
                  <h2 id ="two"><i className="fa-solid fa-ghost"></i>{players[1] ? players[1] : 'Player 2'}</h2>
                </div>
                <div className="box four">
                  <h2 id = "four"><i className="fa-solid fa-ghost"></i>{players[3] ? players[3] : 'Player 4'}</h2>
                </div>
                {(generated && players.length < 6) ? null : (<div className="box six">
                  <h2 id = "six"><i className="fa-solid fa-ghost"></i>{players[5] ? players[5] : 'Player 6'}</h2>
                </div>)}
                
              </div>
            </section>
          </section>

        </section>
      </section>
    </div>
  );
}

export default Table;
