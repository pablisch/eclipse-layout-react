import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Table from './Table';
import Form from './Form';
import { set } from 'date-fns';

function App() {
  const [layout, setLayout] = useState(false);
  const [generated, setGenrated] = useState(false);
  const [playerOrder, setPlayerOrder] = useState([]);
  const [players, setPlayers] = useState([]);
  // const regularPlayerList = ["Pablo", "Oriin", "Alex", "Barney", "Tim"];

  const [pabloChecked, setPabloChecked] = useState(true);
  const [orrinChecked, setOrrinChecked] = useState(true);
  const [alexChecked, setAlexChecked] = useState(true);
  const [barneyChecked, setBarneyChecked] = useState(true);
  const [timChecked, setTimChecked] = useState(true);

  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [add3, setAdd3] = useState('');
  const [add4, setAdd4] = useState('');
  const [add5, setAdd5] = useState('');
  const [add6, setAdd6] = useState('');

  const [layoutImage, setLayoutImage] = useState('images/playTable.png');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers([]);
    let count = 0;
    pabloChecked && count++;
    orrinChecked && count++;
    alexChecked && count++;
    barneyChecked && count++;
    timChecked && count++;
    add1 && count++; add2 && count++; add3 && count++; add4 && count++; add5 && count++; add6 && count++;
    if (count > 6) {
      alert('Eclipse has a maximum of 6 players.');
      return;
    } else if (count < 4) {
      alert('With less than 4 players, you should be able to work this out yourselves!');
      return;
    }

    pabloChecked && setPlayers((players) => [...players, 'Pablo']);
    orrinChecked && setPlayers((players) => [...players, 'Orrin']);
    alexChecked && setPlayers((players) => [...players, 'Alex']);
    barneyChecked && setPlayers((players) => [...players, 'Barney']);
    timChecked && setPlayers((players) => [...players, 'Tim']);
    add1 && setPlayers((players) => [...players, add1]);
    add2 && setPlayers((players) => [...players, add2]);
    add3 && setPlayers((players) => [...players, add3]);
    add4 && setPlayers((players) => [...players, add4]);
    add5 && setPlayers((players) => [...players, add5]);
    add6 && setPlayers((players) => [...players, add6]);
    
    // setAdd1(''); setAdd2(''); setAdd3(''); setAdd4(''); setAdd5(''); setAdd6('');
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

  useEffect(() => {
    console.log("LAYOUT CHANGED", layout)
    console.log(players);
    shuffleArray(players);
    setPlayerOrder(players);
    console.log(players);
    getTableImage();
  }, [players])

  return (
    <div className="App">
      <Navbar layout={layout} setLayout={setLayout} handleSubmit={handleSubmit} />
      <Form pabloChecked={pabloChecked} setPabloChecked={setPabloChecked} orrinChecked={orrinChecked} setOrrinChecked={setOrrinChecked} alexChecked={alexChecked} setAlexChecked={setAlexChecked} barneyChecked={barneyChecked} setBarneyChecked={setBarneyChecked} timChecked={timChecked} setTimChecked={setTimChecked} add1={add1} add2={add2}  add3={add3} add4={add4} add5={add5} add6={add6} setAdd1={setAdd1} setAdd2={setAdd2}  setAdd3={setAdd3} setAdd4={setAdd4} setAdd5={setAdd5} setAdd6={setAdd6}/>
      <Table layout={layout} players={players} layoutImage={layoutImage} generated={generated} />
    </div>
  );
}

export default App;
