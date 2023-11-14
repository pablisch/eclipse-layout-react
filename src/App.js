import { useState } from 'react';
import Navbar from './Navbar';
import Table from './Table';
import Form from './Form';

function App() {
  const regularPlayerList = [
    { id: 1, name: 'Pablo', playing: true },
    { id: 2, name: 'Orrin', playing: true },
    { id: 3, name: 'Alex', playing: true },
    { id: 4, name: 'Barney', playing: true },
    { id: 5, name: 'Tim', playing: true },
  ];
  const [players, setPlayers] = useState(regularPlayerList); // initial players and result of form additions
  const [addPlayer, setAddPlayer] = useState(''); // add players in AditionalPlayers component
  const [playerList, setPlayerList] = useState([]) // final player list resulting from form submission

  const [generated, setGenerated] = useState(false); // true when a laout has been generated
  const [generatedCount, setGeneratedCount] = useState(0); // count of how many generations there have been
  
  function handlePlayerPlaying(name) {
    setPlayers((players) =>
      players.map((player) =>
        player.name === name ? { ...player, playing: !player.playing } : player
      )
    );
  }

  function handleNewPlayer(name) {
    const newPlayer = { id: Date.now(), name: name, playing: true };
    setPlayers((players) => [...players, newPlayer]);
  }

  const handleMainFormSubmit = (e) => {
    e.preventDefault();
    const playingPlayersNames = players.filter(player => player.playing).map(player => player.name)
    console.log(playingPlayersNames)
    if (playingPlayersNames > 6) {
      alert('Eclipse has a maximum of 6 players.');
      return;
    } else if (playingPlayersNames < 4) {
      alert(
        'With less than 4 players, you should be able to work this out yourselves!'
        );
        return;
      }
    setPlayerList(playingPlayersNames)
      
    console.log('players:', players);
    setGenerated(true);
    setGeneratedCount((counter) => counter + 1);
  };

  return (
    <div className='App'>
      <Navbar
        generated={generated}
        setGenerated={setGenerated}
        handleMainFormSubmit={handleMainFormSubmit}
      />
      <Form
        players={players}
        handlePlayerPlaying={handlePlayerPlaying}
        addPlayer={addPlayer}
        setAddPlayer={setAddPlayer}
        handleNewPlayer={handleNewPlayer}
      />
      <Table
        generated={generated}
        playerList={playerList}
        generatedCount={generatedCount}
      />
    </div>
  );
}

export default App;
