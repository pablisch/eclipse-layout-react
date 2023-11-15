import { useState, useEffect } from 'react';

function Table({ generate, playerList, generatedCount }) {
  const [tableImage, setTableImage] = useState('images/playTable.png');
  const [rotation, setRotation] = useState({ transform: 'translate(-50%, -50%) rotate(-16deg)' });
  let numOfPlayers = 6;

  console.log('In Table - player list', playerList);
  if (playerList.length > 0) numOfPlayers = playerList.length;

  useEffect(() => {
    getHexRotationStyle()
    console.log(rotation)
    // getTableImage();
    shuffleArray(playerList);
  }, [playerList])

  function getHexRotationStyle() {
    if (playerList.length === 6) {
      setRotation({ transform: 'translate(-50%, -50%) rotate(-15deg)' });
    } else if (playerList.length === 5) {
      setRotation({ transform: `translate(-50%, -50%) rotate(${fivePlayerRotation()}deg)` });
    } else if (playerList.length === 4) {
      setRotation({ transform: `translate(-50%, -50%) rotate(${fourPlayerRotation()}deg)` });
    } else if (playerList.length === 3) {
      setRotation({ transform: 'translate(-50%, -50%) rotate(30deg)' });
    } else if (playerList.length === 2) {
      setRotation({ transform: 'translate(-50%, -50%) rotate(0deg)' });
    } 
  }

  function fourPlayerRotation() {
    return (Math.floor(Math.random() * (2 - 1 + 1) + 1)) * 90 - 10
  }
  
  function fivePlayerRotation() {
    return (Math.floor(Math.random() * (5 - 1 + 1) + 1)) * 72 - 15
    // if (playerList.length === 5) {
    //   var randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    //   switch (randomNumber) {
    //     case 1:
    //       setTableImage('images/playTableFiveV1b.png');
    //       break;
    //     case 2:
    //       setTableImage('images/playTableFiveV2b.png');
    //       break;
    //     case 3:
    //       setTableImage('images/playTableFiveV3b.png');
    //       break;
    //     case 4:
    //       setTableImage('images/playTableFiveV4b.png');
    //       break;
    //     case 5:
    //       setTableImage('images/playTableFiveV5b.png');
    //       break;
    //     default:
    //       setTableImage('images/playTable.png');
    //       break;
    //   }
    // }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    if (playerList.includes('Pablo')) {
      if (Math.floor(Math.random() * (5 - 1 + 1) + 1) !== 1) {
        let index = playerList.indexOf('Pablo');
        if (index !== -1) {
          let removed = playerList.splice(index, 1);
          playerList.unshift(removed[0]);
        }
      }
    }

    return array;
  }

  return (
    <div>
      <section className="maincols">
      <section className="container">
        
        <section className="left-side">
          <section className="boxes">
            <div className="container">
              <div className="box three">
                <h2 id = "three"><i className="fa-solid fa-ghost"></i>{playerList[2] ? playerList[2] : 'Player 3'}</h2>
              </div>
            </div>
          </section>
        </section>

        <section className="right-side">
          <section className="boxes">
              <div className="container">
                {(generatedCount > 0 && playerList.length < 5) ? null : (
                  <div className="box five">
                <h2 id="five"><i className="fa-solid fa-ghost"></i>{playerList[4] ? playerList[4] : 'Player 5'}</h2>
              </div>
                )}
              <div className="box one">
                <h2 id ="one"><i className="fa-solid fa-ghost"></i>{playerList[0] ? playerList[0] : 'Player 1'}</h2>
              </div>
            </div>
          </section>
            <section className="table">
              {/* {tableImage && <img id='old-table' src={tableImage} alt='table' />} */}
              <img id='table-base' src='images/playTable.png' alt="table-base" />
              <img src={`images/eclipse-layout-${numOfPlayers}.png`} alt="Eclipse layout for 6 players" id='layout' style={rotation} />
          </section>
            <section className="boxes">
              <div className="container">
                <div className="box two">
                  <h2 id ="two"><i className="fa-solid fa-ghost"></i>{playerList[1] ? playerList[1] : 'Player 2'}</h2>
                </div>
                <div className="box four">
                  <h2 id = "four"><i className="fa-solid fa-ghost"></i>{playerList[3] ? playerList[3] : 'Player 4'}</h2>
                </div>
                {(generatedCount > 0 && playerList.length < 6) ? null : (<div className="box six">
                  <h2 id = "six"><i className="fa-solid fa-ghost"></i>{playerList[5] ? playerList[5] : 'Player 6'}</h2>
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
