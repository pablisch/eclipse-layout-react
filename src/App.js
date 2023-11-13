import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Table from './Table';
import Form from './Form';

function App() {
  const regularPlayerList = [{ id: 1, name: "Pablo", playing: true }, { id: 2, name: "Orrin", playing: true }, { id: 3, name: "Alex", playing: true }, { id: 4, name: "Barney", playing: true }, { id: 5, name: "Tim", playing: true },];
  const [players, setPlayers] = useState(regularPlayerList);
  const [addPlayer, setAddPlayer] = useState('')

  const [layout, setLayout] = useState(false);
  const [generated, setGenrated] = useState(false);
  const [layoutImage, setLayoutImage] = useState('images/playTable.png');

  function handlePlayerPlaying(name) {
    setPlayers(players => players.map(player => player.name === name ? {...player, playing: !player.playing} : player))
    console.log("CHANGING PLAYER STATUS", name)
  }

  function handleNewPlayer(name) {
    const newPlayer = { id: Date.now(), name: name, playing: true };
    setPlayers(players => [...players, newPlayer]);
    console.log("NEW PLAYER", name);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPlayers([]);
    let count = 0;
    if (count > 6) {
      alert('Eclipse has a maximum of 6 players.');
      return;
    } else if (count < 4) {
      alert('With less than 4 players, you should be able to work this out yourselves!');
      return;
    }

    console.log(players)
    setLayout(true);
    setGenrated(true);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    if (players.includes('Pablo')) {
      if (Math.floor(Math.random() * (5 - 1 + 1) + 1) !== 1) {
        let index = players.indexOf("Pablo");
        if (index !== -1) {
          let removed = players.splice(index, 1);
          players.unshift(removed[0]);
        }
      }
    }

    return array;
  }

  function getTableImage() { 
    console.log(players.length)
    if (players.length === 4) {
      if (Math.floor(Math.random()*(2-1+1)+1) === 1) {
        setLayoutImage("images/playTableFourV1b.png");
        console.log('layoutImage:', layoutImage);
      } else {
        setLayoutImage("images/playTableFourV2b.png");
        console.log('layoutImage:', layoutImage);
      }
    }

    if (players.length === 5) {
      var randomNumber = (Math.floor(Math.random()*(5-1+1)+1))
      switch(randomNumber) {
        case 1:
          setLayoutImage("images/playTableFiveV1b.png");
          break;
          case 2:
          setLayoutImage("images/playTableFiveV2b.png");
          break;
          case 3:
          setLayoutImage("images/playTableFiveV3b.png");
          break;
          case 4:
          setLayoutImage("images/playTableFiveV4b.png");
          break;
          case 5:
          setLayoutImage("images/playTableFiveV5b.png");
          break;
          default:
          setLayoutImage("images/playTable.png");
          break;
      }
    }
  }

  // useEffect(() => {
  //   console.log("LAYOUT CHANGED", layout)
  //   console.log(players);
  //   // shuffleArray(players);
  //   console.log(players);
  //   getTableImage();
  // }, [players])

  return (
    <div className="App">
      <Navbar layout={layout} setLayout={setLayout} handleSubmit={handleSubmit} />
      <Form players={players} handlePlayerPlaying={handlePlayerPlaying} addPlayer={addPlayer} setAddPlayer={setAddPlayer} handleNewPlayer={handleNewPlayer} />
      <Table layout={layout} players={players} layoutImage={layoutImage} generated={generated} />
    </div>
  );
}

export default App;
