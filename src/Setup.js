import { useState } from 'react';
import Form from './Form';

function Setup() {
  const [players, setPlayers] = useState([]);
  // const playerList = []

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(pabloChecked);
    console.log(orrinChecked);
    console.log(alexChecked);
    console.log(barneyChecked);
    console.log(timChecked);
    console.log('Hello')
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
    
  };

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

  return (
    <div>
      <Form
        players={players}
        onSubmit={handleSubmit}
        pabloChecked={pabloChecked}
        orrinChecked={orrinChecked}
        alexChecked={alexChecked}
        barneyChecked={barneyChecked}
        timChecked={timChecked}

        setPabloChecked={setPabloChecked}
        setOrrinChecked={setOrrinChecked}
        setAlexChecked={setAlexChecked}
        setBarneyChecked={setBarneyChecked}
        setTimChecked={setTimChecked}

        add1={add1}
        add2={add2}
        add3={add3}
        add4={add4}
        add5={add5}
        add6={add6}

        setAdd1={setAdd1}
        setAdd2={setAdd2}
        setAdd3={setAdd3}
        setAdd4={setAdd4}
        setAdd5={setAdd5}
        setAdd6={setAdd6}
      />
      {players.map((player) => {
        return <div key={player}>{player}</div>;
      })}
    </div>
  );
}

export default Setup;
